import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export default function SignupPage() {
  return (
    <div className="bg-[#D2E7FE] min-h-screen flex flex-col items-center justify-center">
      <header className="text-center mb-8">
        <h1 className="text-6xl font-normal font-sedan-sc">HypeWear</h1>
        <hr className="border-black mt-4" />
      </header>
      <main className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl w-full">
        <h2 className="text-4xl font-sedan-sc text-center mb-8">CADASTRO</h2>
        <div className="flex flex-col gap-6">
          <div>
            <label className="font-ramaraja text-3xl">Nome completo</label>
            <Input />
          </div>
          <div>
            <label className="font-ramaraja text-3xl">CPF</label>
            <Input />
          </div>
          <div>
            <label className="font-ramaraja text-3xl">Email</label>
            <Input />
          </div>
          <div>
            <label className="font-ramaraja text-3xl">Criar SENHA</label>
            <Input type="password" />
          </div>
          <Button className="bg-[#18264A] text-white text-xl font-sedan-sc self-center px-16 py-4">
            SALVAR
          </Button>
        </div>
      </main>
    </div>
  );
}
