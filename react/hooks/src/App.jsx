import { UserCard } from "./components/UserCard";
import UserForm from "./components/UserForm";
import { useApp } from "./hooks/useApp";

export default function App() {
  const { handleInputForm, handleSubmitForm, isDisabled, user, users } =
    useApp();

  return (
    <main className="container">
      <UserForm
        user={user}
        handleInput={handleInputForm}
        handleSubmit={handleSubmitForm}
        isDisabled={isDisabled}
      />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </main>
  );
}
