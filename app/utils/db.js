import { Pool } from 'pg'

let pool;

export default async function connectDB() {
  if(pool) return pool;

  pool = new Pool({
    connectionString: 'postgresql://postgres:1911d@localhost:5432/nextjs-project-1'
  });

  try {
    const client = await pool.connect();
    console.log('Connected to PostgreSQL');
    client.release();
    return pool;
  } catch(error){
    console.error('Error connecting to PostgreSQL:', error);
    return null;
  }
}