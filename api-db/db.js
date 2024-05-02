import pg from "pg";
const { Pool } = pg;

const connection = new Pool({
  host: "localhost",
  port: "3336",
  user: "postgres",
  password: "root",
  database: "postgres",
});

export { connection };
