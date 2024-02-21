import "./style.css";

export default function UserForm({
  user,
  handleInput,
  handleSubmit,
  isDisabled,
}) {
  return (
    <div className="card">
      <form className="form">
        <input
          value={user.name}
          name="name"
          onChange={handleInput}
          className="input-text"
          type="text"
          placeholder="Nome do usuário"
        />
        <input
          value={user.email}
          name="email"
          onChange={handleInput}
          className="input-text"
          type="text"
          placeholder="E-mail do usuário"
        />
        <input
          value={user.phone}
          name="phone"
          onChange={handleInput}
          className="input-text"
          type="text"
          placeholder="Telefone do usuário"
        />
        <input
          value={user.document}
          name="document"
          onChange={handleInput}
          className="input-text"
          type="text"
          placeholder="Documento do usuário"
        />
        <button disabled={isDisabled} onClick={handleSubmit}>
          Criar usuário
        </button>
      </form>
    </div>
  );
}
