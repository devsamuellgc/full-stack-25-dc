import { getClientById } from "../services/client.service.js";
const auth = true;

export function isAuthenticated(req, res, next) {
  const userId = String(req.cookies.userId);
  const user = getClientById(userId);
  if (user && !!Object.keys(user).length) {
    return next();
  }
  return res
    .status(401)
    .json({ mensagem: "É necessário estar logado para realizar essa ação" });
}
