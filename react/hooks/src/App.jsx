import { useEffect, useState } from "react";
import { UserCard } from "./components/UserCard";
import UserForm from "./components/UserForm";
import axios from "axios";

export default function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [users, setUsers] = useState([]);

  const handleInputForm = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, { ...user, id: Math.random() }]);
    // await axios.post("https://65a5c2b574cf4207b4eee269.mockapi.io/users", user);
  };

  async function fetchUsers() {
    const response = await axios.get(
      "https://65a5c2b574cf4207b4eee269.mockapi.io/users"
    );
    setUsers(response.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className="container">
      <UserForm
        user={user}
        handleInput={handleInputForm}
        handleSubmit={handleSubmitForm}
      />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </main>
  );
}
