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