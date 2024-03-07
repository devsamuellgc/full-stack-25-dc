import express from "express";

const app = express();
const port = 3000;

const clientes = [
  {
    id: "1",
    name: "Cliente 1",
    email: "cliente1@email.com",
  },
  {
    id: "2",
    name: "Cliente 2",
    email: "cliente2@email.com",
  },
  {
    id: "3",
    name: "Cliente 3",
    email: "cliente3@email.com",
  },
  {
    id: "4",
    name: "Cliente 4",
    email: "cliente4@email.com",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/clientes", (req, res) => {
  return res.json({
    data: clientes,
    mensagem: "Clientes recebidos com sucesso!",
  });
});

app.get("/cliente/:id", (req, res) => {
  const id = req.params.id;
  const cliente = clientes.find((cliente) => cliente.id === id);

  return res.json({
    data: cliente,
    mensagem: "Cliente encontrado com sucesso!",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
