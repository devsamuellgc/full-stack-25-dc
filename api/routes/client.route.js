import { Router } from "express";
import * as clientController from "../controllers/client.controller.js";

const clientsRouter = Router();

clientsRouter.get("/clients", clientController.getAllClients);
clientsRouter.get("/clients/:id", clientController.getClientById);
clientsRouter.delete("/clients/:id", clientController.removeClient);

export default clientsRouter;
