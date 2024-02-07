import "./style.css";

export default function UserForm({ user, handleInput }) {
  return (
    <div className="card">
      <form className="form">
        <input
          value={user.name}
          name="name"
          onChange={handleInput}
          className="input-text"
          type="text"
        />
        <input
          value={user.email}
          name="email"
          onChange={handleInput}
          className="input-text"
          type="text"
        />
        <input
          value={user.phone}
          name="phone"
          onChange={handleInput}
          className="input-text"
          type="text"
        />
      </form>
    </div>
  );
}
