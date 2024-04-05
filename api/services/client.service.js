import * as clientRepository from "../repositories/client.repository.js";

const getAllClients = () => clientRepository.getAllClients();
const getClientById = (id) => clientRepository.getClientById(id);
const createAClient = (client) => clientRepository.createAClient(client);
const removeAClient = (id) => clientRepository.removeAClient(id);
const editAClient = (id, client) => clientRepository.editAClient(id, client);

export {
  getAllClients,
  createAClient,
  editAClient,
  getClientById,
  removeAClient,
};
