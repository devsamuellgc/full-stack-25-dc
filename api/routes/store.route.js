import { Router } from "express";
import * as storeController from "../controllers/store.controller.js";

const storesRouter = Router();

const user = {
  role: "finan",
  name: "Teste",
};

function isUserAdmin(req, res, next) {
  if (user.role === "admin") {
    console.log("Usuário admin!");
    return next();
  }
  return res.status(403).json({
    mensagem: "É necessário ser um usuário admin para realizar essa ação",
  });
}

storesRouter.post("/stores", storeController.createAStore);
storesRouter.get("/stores", storeController.getAllStores);
storesRouter.get(
  "/stores/total-invoice",
  isUserAdmin,
  storeController.getTotalInvoiceForAllStores
);
storesRouter.get(
  "/stores/total-invoice-per-uf",
  storeController.getTotalStoreInvoicePerUf
);
storesRouter.get("/stores/:id", storeController.getStoreById);
storesRouter.delete("/stores/:id", storeController.removeAStore);

export default storesRouter;
