import { Card } from "./components/Card";

export default function App() {
  return (
    <div className="w-full h-screen bg-slate-100 p-10">
      <Card
        url="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
        nome="Samuel"
        email="teste@teste.com"
        telefone="+55 85 99999-9999"
      />
    </div>
  );
}
