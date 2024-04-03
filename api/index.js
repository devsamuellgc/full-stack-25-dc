import express from "express";
import storesRouter from "./routes/store.route.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(storesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
