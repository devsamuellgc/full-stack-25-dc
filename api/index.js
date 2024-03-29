import express from "express";
import * as storeController from "./controllers/store.controller.js";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/stores", storeController.getAllStores);
app.get("/stores/:id", storeController.getStoreById);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
