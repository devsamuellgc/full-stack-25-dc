import * as storeRepository from "../repositories/store.repository.js";

const getAllStores = () => storeRepository.getAllStores();
const getStoreById = (id) => storeRepository.getStoreById(id);
const createAStore = (store) => storeRepository.createAStore(store);
const removeAStore = (id) => storeRepository.removeAStore(id);
const editAStore = (id, store) => storeRepository.editAStore(id, store);
const getTotalInvoiceForAllStores = (stores) => {
  const invoice = stores.reduce((prev, current) => {
    return prev + current.invoice;
  }, 0);

  return invoice;
};
const getTotalStoreInvoicePerUf = (stores) => {
  const totalInvoicesPerUf = {};
  stores.map((loja) => {
    if (!!totalInvoicesPerUf[loja.state]) {
      return (totalInvoicesPerUf[loja.state] =
        totalInvoicesPerUf[loja.state] + loja.invoice);
    }
    return (totalInvoicesPerUf[loja.state] = loja.invoice);
  });

  return totalInvoicesPerUf;
};

export {
  getAllStores,
  createAStore,
  editAStore,
  getStoreById,
  removeAStore,
  getTotalStoreInvoicePerUf,
  getTotalInvoiceForAllStores,
};
