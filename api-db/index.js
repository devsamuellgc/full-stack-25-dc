import express from "express";
import { connection } from "./db.js";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  const params = req.query;
  console.log(params);
  const page = Number(params.page) <= 1 ? 0 : (Number(params.page) - 1) * 10;
  const users = await connection.query(
    `
      SELECT * FROM users 
      ORDER BY documento DESC
      LIMIT 10
      OFFSET ${page} 
    `
  );
  return res.json(users.rows);
});

app.get("/livros", async (req, res) => {
  const livros = await connection.query('SELECT * FROM livros;');
  return res.json(livros.rows);
})

app.get("/active-users", async (req, res) => {
  const users = await connection.query(
    "SELECT * FROM users WHERE isactive = 1"
  );
  return res.json(users.rows);
});

app.get("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const users = await connection.query(
      `SELECT * FROM users WHERE id = '${userId}'`
    );
    return res.json(users.rows);
  } catch (error) {
    return res.send(error);
  }
});

app.get("/livros/autor/:autor", async (req, res) => {
  const autor = req.params.autor;
  const livros = await connection.query(`
    SELECT * FROM livros WHERE autor = '${autor}'
  `)
  return res.json(livros.rows)
})

app.get("/livros/estoque", async (req, res) => {
  const livrosComEstoqueMaiorQueDez = await connection.query(`
    SELECT * FROM livros WHERE estoque > 10;
  `);
  return res.json(livrosComEstoqueMaiorQueDez.rows);
})

app.get("/livros/:id", async (req, res) => {
  const id = req.params.id;
  const livro = await connection.query(`
    SELECT * FROM livros WHERE id = '${id}';
  `)
  return res.json(livro.rows[0])
})

app.get("/cpf/:cpf", async (req, res) => {
  const userCpf = req.params.cpf;
  try {
    const user = await connection.query(
      `SELECT * FROM users WHERE documento = '${userCpf}'`
    );
    return res.json(user.rows);
  } catch (error) {
    return res.send(error);
  }
});

app.post("/livros", async (req, res) => {
  const livro = req.body;
  const keys = Object.keys(livro);
  console.log(keys);
  // const livroCriado = await connection.query(`
  //   INSERT INTO livros (nome, autor, estoque)
  //   VALUES ('${livro.nome}', '${livro.autor}', ${livro.estoque});
  // `)
  return res.json(livro);
})

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
