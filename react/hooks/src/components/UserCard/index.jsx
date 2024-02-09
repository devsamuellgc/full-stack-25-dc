import "./style.css";

export function UserCard({ user }) {
  return (
    <div className="card">
      <ul className="list">
        <li className="item">Nome: {user.name}</li>
        <li className="item">E-mail: {user.email}</li>
        {user.phone && <li className="item">Telefone: {user.phone}</li>}
      </ul>
    </div>
  );
}
