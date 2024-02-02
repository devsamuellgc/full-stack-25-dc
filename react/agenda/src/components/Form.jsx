import { useState } from "react";

export function Form() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  function handleInput(e) {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  return (
    <form className="max-w-96 max-h-96 bg-white shadow rounded-md flex flex-col gap-2 p-4">
      <h2 className="text-xl">Crie um usuário</h2>
      <div className="flex flex-col gap-2">
        <input
          className="outline-none rounded px-2 py-1 border bg-transparent"
          type="text"
          name="name"
          placeholder="Nome"
          value={user.name}
          onChange={handleInput}
        />
        <input
          className="outline-none rounded px-2 py-1 border bg-transparent"
          type="text"
          name="email"
          placeholder="E-mail"
          value={user.email}
          onChange={handleInput}
        />
        <input
          className="outline-none rounded px-2 py-1 border bg-transparent"
          type="text"
          name="phone"
          placeholder="Telefone"
          value={user.phone}
          onChange={handleInput}
        />
        <button className="bg-sky-600 w-full rounded py-1.5 text-white shadow">
          Cadastrar
        </button>
      </div>
    </form>
  );
}
