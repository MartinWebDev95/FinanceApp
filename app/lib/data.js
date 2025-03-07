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