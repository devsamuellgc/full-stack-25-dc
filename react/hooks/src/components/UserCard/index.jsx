import "./style.css";
import { useFormat } from "../../hooks/useFormat";

export function UserCard({ user }) {
  const { handlePhoneFormat, handleCpfCnpjFormat } = useFormat();
  return (
    <div className="card">
      <ul className="list">
        <li className="item">Nome: {user.name}</li>
        <li className="item">E-mail: {user.email}</li>
        {user.phone && (
          <li className="item">Telefone: {handlePhoneFormat(user.phone)}</li>
        )}
        {user.document && (
          <li className="item">
            Documento: {handleCpfCnpjFormat(user.document)}
          </li>
        )}
      </ul>
    </div>
  );
}
