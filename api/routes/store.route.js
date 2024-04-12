import { Router } from "express";
import * as storeController from "../controllers/store.controller.js";

const storesRouter = Router();

storesRouter.post("/stores", storeController.createAStore);
storesRouter.get("/stores", storeController.getAllStores);
storesRouter.get(
  "/stores/total-invoice",
  storeController.getTotalInvoiceForAllStores
);
storesRouter.get(
  "/stores/total-invoice-per-uf",
  storeController.getTotalStoreInvoicePerUf
);
storesRouter.get("/stores/:id", storeController.getStoreById);
storesRouter.delete("/stores/:id", storeController.removeAStore);

export default storesRouter;
