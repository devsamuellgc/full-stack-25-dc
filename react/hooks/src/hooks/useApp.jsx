import axios from "axios";
import { useEffect, useState } from "react";

export function useApp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
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

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.name.length > 0 &&
      user.phone.length > 0 &&
      user.email.includes("@")
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [user]);

  return { user, users, handleInputForm, handleSubmitForm, isDisabled };
}
