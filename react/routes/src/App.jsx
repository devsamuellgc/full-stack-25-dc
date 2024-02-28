import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AppLayout } from "./layouts/AppLayout";
import { Client } from "./pages/Client";
import { Clients } from "./pages/Clients";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        path: "clientes",
        element: <Clients />,
      },
      {
        path: "cliente/:nome",
        element: <Client />,
      },
      {
        path: "fornecedores",
        element: <h1>Módulo de fornecedores</h1>,
      },
      {
        path: "vendas",
        element: <h1>Módulo de vendas</h1>,
      },
      {
        path: "despesas",
        element: <h1>Módulo de despesas</h1>,
      },
    ],
  },
  {
    path: "*",
    element: "Página não encontrada",
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
