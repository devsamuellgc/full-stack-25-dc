const stores = [
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

const getAllStores = () => stores;
const getStoreById = (id) => stores.find((store) => store.id === id);
const createAStore = (store) => stores.push(store);
const removeAStore = (id) => {
  const storeIndex = stores.findIndex((store) => store.id === id);
  const removedStore = stores.splice(storeIndex, 1);
  return removedStore;
};
const editAStore = (id, editedStore) => {
  const storeIndex = stores.findIndex((store) => store.id === id);
  stores[storeIndex] = { ...stores[storeIndex], ...editedStore };
  return stores[storeIndex];
};

export { getAllStores, getStoreById, createAStore, removeAStore, editAStore };
