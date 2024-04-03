import { Router } from "express";
import * as storeController from "../controllers/store.controller.js";

const storesRouter = Router();

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

export default storesRouter;
