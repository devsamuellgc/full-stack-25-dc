import { Outlet } from "react-router-dom";
import { LinkItem } from "../components/Link";

export function AppLayout() {
  return (
    <>
      <header className="fixed bg-blue-700 top-0 left-0 right-0 h-16 border-b flex items-center px-7">
        Header
      </header>
      <aside className="fixed bg-teal-500 left-0 bottom-0 top-16 w-3/12 border-r flex flex-col gap-2 px-3 py-5">
        <LinkItem path="clientes" title="Clientes" />
        <LinkItem path="despesas" title="Despesas" />
        <LinkItem path="vendas" title="Vendas" />
        <LinkItem path="fornecedores" title="Fornecedores" />
      </aside>
      <main className="fixed p-6 right-0 bottom-0 top-16 w-9/12 bg-violet-500">
        <Outlet />
      </main>
    </>
  );
}
