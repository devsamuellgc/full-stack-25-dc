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

const getTotalInvoiceForAllStores = (req, res) => {
  const stores = storeService.getAllStores();

  if (!stores.length) {
    return res.status(200).json({ mensagem: "Não há lojas cadastradas!" });
  }

  const invoice = storeService.getTotalInvoiceForAllStores(stores);

  if (!!invoice) {
    return res.status(200).json({
      data: invoice,
      mensagem: "Faturamentos calculados com sucesso!",
    });
  }

  return res
    .status(500)
    .json({ mensagem: "Ocorreu um erro, tente novamente mais tarde!" });
};

const getTotalStoreInvoicePerUf = (req, res) => {
  const stores = storeService.getAllStores();

  if (!stores.length) {
    return res.status(200).json({ mensagem: "Não há lojas cadastradas!" });
  }

  const invoicesPerUf = storeService.getTotalStoreInvoicePerUf(stores);

  if (!!Object.keys(invoicesPerUf).length) {
    return res.status(200).json({
      data: invoicesPerUf,
      mensagem: "Faturamentos calculados com sucesso!",
    });
  }

  return res
    .status(500)
    .json({ mensagem: "Ocorreu um erro, tente novamente mais tarde!" });
};

const removeAStore = (req, res) => {
  const id = req.params.id;
  const store = storeService.getStoreById(id);
  if (!store) {
    return res.status(404).json({ mensagem: "Loja não encontrada!" });
  }
  const removedStore = storeService.removeAStore(store.id);
  if (!!Object.keys(removedStore).length) {
    return res
      .status(200)
      .json({ mensagem: "Loja deletada com sucesso", data: store });
  }
  return res
    .status(500)
    .json({ mensagem: "Ocorreu um erro, tente novamente mais tarde!" });
};

const createAStore = (req, res) => {
  const newStore = req.body;

  if (!newStore.id.trim()) {
    return res.status(400).json({ mensagem: "O id não pode ser vazio!" });
  }

  const idValidation = storeService.getStoreById(newStore.id);

  if (!!idValidation && !!Object.keys(idValidation).length) {
    return res
      .status(400)
      .json({ mensagem: "Esse ID já foi cadastrado, tente um novo!" });
  }

  if (!newStore.nome.trim()) {
    return res.status(400).json({ mensagem: "O nome é obrigatório!" });
  }

  if (typeof newStore.invoice !== "number") {
    return res
      .status(400)
      .json({ mensagem: "O faturamento precisa ser do tipo numérico!" });
  }

  if (!newStore.state.trim()) {
    return res.status(400).json({ mensagem: "O estado é obrigatório!" });
  }

  const createdStore = storeService.createAStore(newStore);
  if (createdStore > 0) {
    return res
      .status(200)
      .json({ data: newStore, mensagem: "Loja criada com sucesso!" });
  }

  return res
    .status(500)
    .json({ mensagem: "Ocorreu um erro, tente novamente mais tarde!" });
};

export {
  removeAStore,
  getAllStores,
  createAStore,
  getStoreById,
  getTotalInvoiceForAllStores,
  getTotalStoreInvoicePerUf,
};
