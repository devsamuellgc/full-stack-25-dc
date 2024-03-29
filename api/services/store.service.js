import * as storeRepository from "../repositories/store.repository.js";

const getAllStores = () => storeRepository.getAllStores();
const getStoreById = (id) => storeRepository.getStoreById(id);
const createAStore = (store) => storeRepository.createAStore(store);
const removeAStore = (id) => storeRepository.removeAStore(id);
const editAStore = (id, store) => storeRepository.editAStore(id, store);

export { getAllStores, createAStore, editAStore, getStoreById, removeAStore };
