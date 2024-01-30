export function Card({ url, email, nome, telefone }) {
  return (
    <div className="p-5 h-fit rounded-lg flex flex-col bg-white shadow-xl w-80 gap-8">
      <div className="rounded-full mx-auto overflow-hidden w-44 h-44">
        <img src={url} alt="" />
      </div>
      <div>
        <p className="text-center text-xl text-gray-900 font-medium">{nome}</p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <span className="text-gray-500 font-semibold w-[25%]">E-mail</span>
          <p>{email}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-500 font-semibold w-[25%]">Telefone</span>
          <p>{telefone}</p>
        </div>
      </div>
    </div>
  );
}
