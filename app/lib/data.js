import { auth } from "@/auth";
import { sql } from "@vercel/postgres";

export async function getUser(email) {
  try {
    const user = await sql`SELECT * FROM users WHERE email = ${email}`;
    
    return user.rows[0];
  } catch (error) {
    throw new Error('Failed to get user.');
  }
}

export async function fetchPots({ limit = 0 } = {}) {

  try {
    const { user } = await auth();
    
    let data;

    if (limit > 0) {
      data = await sql`
        SELECT *, (SELECT SUM(total) FROM pots WHERE user_id=${user.id}) AS total_sum FROM pots WHERE user_id=${user.id} LIMIT ${limit}
      `;
    } else {
      data = await sql`
        SELECT * FROM pots WHERE user_id=${user.id}
      `;
    }

    return data.rows;
  } catch (error) {
    throw new Error('Failed to fetch pots.');
  }
}

export async function fetchCategories() {
  try {
    const categories = await sql`
      SELECT * FROM categories
    `;

    return categories.rows;
  } catch (error) {
    throw new Error('Failed to fetch categories.');
  }
}

export async function fetchTransactions({ limit = 0, query = '' } = {}) {
  try {
    const { user } = await auth();
    
    let data;

    if (limit > 0) {
      data = await sql`
        SELECT t.id, t.avatar, t.name, c.label, t.date, t.amount, t.recurring 
        FROM transactions AS t, categories AS c
        WHERE t.category_id = c.id AND t.user_id = ${user.id}
        LIMIT ${limit}
      `;
    } else {
      data = await sql`
        SELECT t.id, t.avatar, t.name, c.label, c.value, t.date, t.amount, t.created_at 
        FROM transactions AS t 
        INNER JOIN categories AS c ON t.category_id = c.id
        WHERE t.user_id = ${user.id}
        AND c.value = COALESCE(NULLIF(${query?.category}, ''), c.value)
        AND (
          t.name ILIKE ${`%${query?.search ?? ''}%`} 
          OR t.date::TEXT ILIKE ${`%${query?.search ?? ''}%`}
          OR t.amount::TEXT ILIKE ${`%${query?.search ?? ''}%`}
        )
        ORDER BY 
          CASE
            WHEN ${query?.sort} = 'oldest' THEN t.created_at END,
          CASE 
            WHEN ${query?.sort} = 'az' THEN t.name END,
          CASE
            WHEN ${query?.sort} = 'za' THEN t.name END DESC,
          CASE 
            WHEN ${query?.sort} = 'highest' THEN t.amount END DESC,
          CASE 
            WHEN ${query?.sort} = 'lowest' THEN t.amount END,
          t.created_at DESC
      `;
    }

    return data.rows;
  } catch (error) {
    throw new Error('Failed to fetch transactions.');
  }
}

export async function fetchBudgets() {
  try {
    const { user } = await auth();

    const data = await sql`
      SELECT 
        b.id, 
        c.label, 
        b.maximum, 
        b.theme, 
        b.category_id, 
        c.value,
        SUM(t.amount) AS total_transactions_amount
      FROM 
        budgets b
      INNER JOIN categories c ON c.id = b.category_id
      INNER JOIN transactions t ON t.category_id = c.id
      WHERE 
        b.user_id = ${user.id}
      GROUP BY 
        b.id, c.label, b.maximum, b.theme, b.category_id, c.value;
    `;

    return data.rows;
  } catch (error) {
    throw new Error('Failed to fetch budgets');
  }
}

export async function fetchTransactionsByCategory({ categoryId }) {
  try {
    const { user } = await auth();
    
    const data = await sql`
      SELECT id, avatar, name, date, amount
      FROM transactions
      WHERE category_id = ${categoryId} AND user_id = ${user.id}
      ORDER BY created_at DESC
      LIMIT 3
    `;

    return data.rows;
  } catch (error) {
    throw new Error('Failed to fetch transactions by category');    
  }
}

export async function fetchRecurringBills({ query = '' } = {}) {
  try {
    const { user } = await auth();

    const data = await sql`
      SELECT 
        id, 
        avatar, 
        name, 
        date, 
        amount, 
        created_at
      FROM transactions 
      WHERE user_id = ${user.id} 
      AND recurring = TRUE
      AND (
        name ILIKE ${`%${query?.search ?? ''}%`} 
        OR date::TEXT ILIKE ${`%${query?.search ?? ''}%`}
        OR amount::TEXT ILIKE ${`%${query?.search ?? ''}%`}
      )
      ORDER BY 
        CASE
          WHEN ${query?.sort} = 'oldest' THEN created_at END,
        CASE 
          WHEN ${query?.sort} = 'az' THEN name END,
        CASE
          WHEN ${query?.sort} = 'za' THEN name END DESC,
        CASE 
          WHEN ${query?.sort} = 'highest' THEN amount END,
        CASE 
          WHEN ${query?.sort} = 'lowest' THEN amount END DESC,
        created_at DESC
    `;

    return data.rows;
  } catch (error) {
    throw new Error('Failed to fetch recurring bills');
  }
}

export async function fetchBillsSummary() {
  try {
    const { user } = await auth();

    const totalBills = sql`
      SELECT SUM(amount)
      FROM transactions 
      WHERE user_id = ${user.id} 
      AND recurring = TRUE;
    `;

    const paidBills = sql`
      SELECT SUM(amount)
      FROM transactions 
      WHERE user_id = ${user.id} 
      AND recurring = TRUE
      AND EXTRACT(DAY FROM date) <= EXTRACT(DAY FROM NOW());
    `;

    const upcomingBills = sql`
      SELECT SUM(amount)
      FROM transactions 
      WHERE user_id = ${user.id} 
      AND recurring = TRUE
      AND EXTRACT(DAY FROM date) > EXTRACT(DAY FROM NOW());
    `;

    const dueSoon = sql`
      SELECT SUM(amount)
      FROM transactions 
      WHERE user_id = ${user.id} 
      AND recurring = TRUE
      AND EXTRACT(DAY FROM date) > EXTRACT(DAY FROM NOW())
      AND EXTRACT(DAY FROM date) <= EXTRACT(DAY FROM NOW() + INTERVAL '5 days');
    `; 

    const data = await Promise.all([totalBills, paidBills, upcomingBills, dueSoon]);

    return ({
      totalBills: data[0].rows[0],
      paidBills: data[1].rows[0],
      upcomingBills: data[2].rows[0],
      dueSoon: data[3].rows[0]
    }); 
    
  } catch (error) {
    throw new Error('Failed to fetch bills summary');
  }
}