import { LinkItem } from "../components/Link";

export function Clients() {
  return (
    <>
      <h1>Módulo de clientes</h1>
      <LinkItem path="/app/cliente/samuel" title="Cliente Samuel" />
      <LinkItem path="/app/cliente/teste" title="Cliente Teste" />
      <LinkItem path="/app/cliente/outro-nome" title="Cliente Outro Nome" />
    </>
  );
}
