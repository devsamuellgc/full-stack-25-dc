const clients = [
  {
    id: "1",
    name: "Cliente 1",
    email: "cliente1@email.com",
    role: "admin",
  },
  {
    id: "2",
    name: "Cliente 2",
    email: "cliente2@email.com",
    role: "sales",
  },
  {
    id: "3",
    name: "Cliente 3",
    email: "cliente3@email.com",
    role: "operator",
  },
  {
    id: "4",
    name: "Cliente 4",
    email: "cliente4@email.com",
    role: "financial",
  },
];

const getAllClients = () => clients;
const getClientById = (id) => clients.find((client) => client.id === id);
const createAClient = (client) => clients.push(client);
const removeAClient = (id) => {
  const clientIndex = clients.findIndex((client) => client.id === id);
  const removedClient = clients.splice(clientIndex, 1);
  return removedClient[0];
};
const editAClient = (id, editedClient) => {
  const clientIndex = clients.findIndex((client) => client.id === id);
  clients[clientIndex] = { ...clients[clientIndex], ...editedClient };
  return clients[clientIndex];
};

export {
  getAllClients,
  getClientById,
  createAClient,
  removeAClient,
  editAClient,
};
