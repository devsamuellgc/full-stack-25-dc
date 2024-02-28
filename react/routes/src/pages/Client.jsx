import { useParams } from "react-router-dom";

export function Client() {
  const { nome } = useParams();
  return <h1>Módulo do cliente: {nome}</h1>;
}
