import express from "express";
import storesRouter from "./routes/store.route.js";
import clientsRouter from "./routes/client.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import { isAuthenticated } from "./middlewares/authentication.middleware.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cookieParser());
app.use(authRouter);
app.use(isAuthenticated);
app.use(clientsRouter);
app.use(storesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
