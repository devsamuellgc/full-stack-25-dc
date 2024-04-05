import express from "express";
import storesRouter from "./routes/store.route.js";
import clientsRouter from "./routes/client.route.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(storesRouter);
app.use(clientsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
