import * as clientService from "../services/client.service.js";

const getAllClients = (req, res) => {
  const clients = clientService.getAllClients();

  if (!!clients.length) {
    return res
      .status(200)
      .json({ data: clients, mensagem: "Clientes encontrados com sucesso!" });
  }

  if (!clients.length) {
    return res
      .status(200)
      .json({ data: clients, mensagem: "Não há clientes cadastrados!" });
  }

  return res.status(500).json({ mensagem: "Tente novamente mais tarde!" });
};

const getClientById = (req, res) => {
  const id = req.params.id;
  const client = clientService.getClientById(id);
  if (!!Object.keys(client).length) {
    res
      .status(200)
      .json({ data: client, mensagem: "Cliente encontrado com sucesso!" });
  }
};

const removeClient = (req, res) => {
  const id = req.params.id;
  const client = clientService.getClientById(id);
  if (!client) {
    return res.status(404).json({ mensagem: "Usuário não encontrado!" });
  }
  const removedClient = clientService.removeAClient(client.id);
  if (!!Object.keys(removedClient).length) {
    return res
      .status(200)
      .json({ mensagem: "Cliente deletado com sucesso", data: client });
  }
  return res
    .status(500)
    .json({ mensagem: "Ocorreu um erro, tente novamente mais tarde!" });
};

export { getAllClients, getClientById, removeClient };
