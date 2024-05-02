import express from "express";
import { connection } from "./db.js";

const app = express();

app.get("/", async (req, res) => {
  const users = await connection.query("SELECT * FROM users");
  return res.json(users.rows);
});

app.get("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const users = await connection.query(`SELECT * FROM users WHERE id = '${userId}'`);
    return res.json(users.rows);
  } catch (error) {
    return res.send(error)
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
