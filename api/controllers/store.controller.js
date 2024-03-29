import * as storeService from "../services/store.service.js";

const getAllStores = (req, res) => {
  const stores = storeService.getAllStores();

  if (!!stores.length) {
    return res
      .status(200)
      .json({ data: stores, mensagem: "Lojas encontradas com sucesso!" });
  }

  if (!stores.length) {
    return res
      .status(200)
      .json({ data: stores, mensagem: "Não há lojas cadastradas!" });
  }

  return res.status(500).json({ mensagem: "Tente novamente mais tarde!" });
};

const getStoreById = (req, res) => {
  const id = req.params.id;
  const store = storeService.getStoreById(id);
  if (!!Object.keys(store).length) {
    res
      .status(200)
      .json({ data: store, mensagem: "Loja encontrada com sucesso!" });
  }
};

export { getAllStores, getStoreById };
