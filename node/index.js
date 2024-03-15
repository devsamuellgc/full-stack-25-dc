import express from "express";

const app = express();
const port = 3000;
app.use(express.json());

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

const lojas = [
  {
    id: "1",
    nome: "Loja 1",
    invoice: 1598.45,
    state: "CE",
  },
  {
    id: "2",
    nome: "Loja 2",
    invoice: 2000,
    state: "SP",
  },
  {
    id: "3",
    nome: "Loja 3",
    invoice: 4500,
    state: "RJ",
  },
  {
    id: "4",
    nome: "Loja 4",
    invoice: 159.98,
    state: "CE",
  },
  {
    id: "5",
    nome: "Loja 5",
    invoice: 8759.44,
    state: "SP",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/clientes", (req, res) => {
  if (!!clientes.length) {
    return res.status(200).json({
      data: clientes,
      mensagem: "Clientes recebidos com sucesso!",
    });
  }

  if (!clientes.length) {
    return res.status(200).json({
      data: clientes,
      mensagem: "Não há clientes cadastrados!",
    });
  }

  return res.status(500).send("Erro no servidor. Tente novamente mais tarde!");
});

app.get("/cliente/:id", (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ mensagem: "O id é obrigatório!" });
  }

  const cliente = clientes.find((cliente) => cliente.id === id);

  if (!cliente) {
    return res.status(404).json({ mensagem: "Cliente não encontrado!" });
  }

  if (!!Object.keys(cliente).length) {
    return res.status(200).json({
      data: cliente,
      mensagem: "Cliente encontrado com sucesso!",
    });
  }
});

app.get("/lojas", (req, res) => {
  return res.json({
    data: lojas,
    mensagem: "Lojas encontradas com sucesso!",
  });
});

app.get("/loja/:id", (req, res) => {
  const id = req.params.id;
  const loja = lojas.find((loja) => loja.id === id);

  return res.json({
    data: loja,
    mensagem: "Loja encontrada com sucesso!",
  });
});

app.get("/lojas/faturamento-total", (req, res) => {
  const faturamentoTotalLojas = lojas.reduce((prev, current) => {
    return prev + current.invoice;
  }, 0);
  return res.json({
    data: faturamentoTotalLojas,
    message: "Faturamentos calculados com sucesso!",
  });
});

app.get("/lojas/faturamento-por-uf", (req, res) => {
  const faturamentoLojasPorUf = {};
  lojas.map((loja) => {
    if (!!faturamentoLojasPorUf[loja.state]) {
      return (faturamentoLojasPorUf[loja.state] =
        faturamentoLojasPorUf[loja.state] + loja.invoice);
    }
    return (faturamentoLojasPorUf[loja.state] = loja.invoice);
  });
  return res.json({
    data: faturamentoLojasPorUf,
    message: "Faturamentos por UF calculados com sucesso!",
  });
});

app.post("/lojas", (req, res) => {
  const loja = req.body;

  if (!loja.id) {
    return res.status(400).json({ mensagem: "O Id é obrigatório!" });
  }

  if (!loja.nome) {
    return res.status(400).json({ mensagem: "O nome é obrigatório!" });
  }

  if (!loja.state) {
    return res.status(400).json({ mensagem: "O estado é obrigatório!" });
  }

  if (!loja.invoice || loja.invoice < 0) {
    return res.status(400).json({ mensagem: "O faturamento é obrigatório!" });
  }

  if (typeof loja.invoice !== "number") {
    return res
      .status(400)
      .json({ mensagem: "O faturamento precisa ser um número!" });
  }

  if (!!Object.keys(loja).length) {
    lojas.push(loja);
    return res
      .status(201)
      .json({ mensagem: "Loja criado com sucesso", data: loja });
  }

  return res
    .status(500)
    .json({ mensagem: "Erro, tente novamente mais tarde!" });
});

app.post("/clientes", (req, res) => {
  clientes.push(req.body);
  return res
    .status(201)
    .json({ mensagem: "Clientes criada com sucesso!", data: req.body });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
