import { Card } from "./components/Card";
import { Counter } from "./components/Counter";

export default function App() {
  const users = [
    {
      url: "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
      nome: "Samuel",
      email: "teste@teste.com",
      telefone: "+55 85 99999-9999",
    },
    {
      url: "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
      nome: "Samuel",
      email: "teste@teste.com",
      telefone: "+55 85 99999-9999",
    },
    {
      url: "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
      nome: "Samuel",
      email: "teste@teste.com",
      telefone: "+55 85 99999-9999",
    },
    {
      url: "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
      nome: "Samuel",
      email: "teste@teste.com",
      telefone: "+55 85 99999-9999",
    },
    {
      url: "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
      nome: "Samuel",
      email: "teste@teste.com",
      telefone: "+55 85 99999-9999",
    },
    {
      url: "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
      nome: "Samuel",
      email: "teste@teste.com",
      telefone: "+55 85 99999-9999",
    },
  ];

  return (
    // <div className="w-full min-h-screen flex gap-10 flex-wrap bg-slate-100 p-10">
    //   {users.map((user, index) => (
    //     <Card
    //       key={index}
    //       email={user.email}
    //       nome={user.nome}
    //       telefone={user.telefone}
    //       url={user.url}
    //     />
    //   ))}
    // </div>
    <div>
      <Counter />
    </div>
  );
}
