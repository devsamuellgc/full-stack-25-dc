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
export {
  getAllStores,
  getStoreById,
  getTotalInvoiceForAllStores,
  getTotalStoreInvoicePerUf,
};
