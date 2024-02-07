import { useEffect, useState } from "react";
import { UserCard } from "./components/UserCard";
import UserForm from "./components/UserForm";

export default function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInput = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: "Teste useEffect",
        email: "Teste useEffect",
        phone: "Teste useEffect",
      });
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <main className="container">
      <UserForm user={user} handleInput={handleInput} />
      <UserCard user={user} />
    </main>
  );
}
