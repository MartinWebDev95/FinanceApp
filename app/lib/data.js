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
    let data;

    if (limit > 0) {
      data = await sql`
        SELECT *, (SELECT SUM(total) FROM pots) AS total_sum FROM pots LIMIT ${limit}
      `;
    } else {
      data = await sql`
        SELECT *, (SELECT SUM(total) FROM pots) AS total_sum FROM pots
      `;
    }

    return data.rows;
  } catch (error) {
    throw new Error('Failed to fetch pots.');
  }
}