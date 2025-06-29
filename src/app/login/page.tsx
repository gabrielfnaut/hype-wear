
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="bg-[#D2E7FE] min-h-screen flex flex-col items-center justify-center">
      <header className="text-center mb-8">
        <h1 className="text-6xl font-normal font-sedan-sc">HypeWear</h1>
        <hr className="border-black mt-4" />
      </header>
      <main className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-4xl font-sedan-sc text-center mb-8">Fazer Login</h2>
        <div className="flex flex-col gap-6">
          <div>
            <label className="font-ramaraja text-xl">Email:</label>
            <Input placeholder="Digite seu email" />
          </div>
          <div>
            <label className="font-ramaraja text-xl">Senha:</label>
            <Input type="password" placeholder="Digite sua senha" />
          </div>
          <Button className="bg-[#18264A] text-white text-2xl font-ramaraja">Fazer Login</Button>
          <p className="text-center font-ramaraja text-lg">
            Não possui conta?{" "}
            <Link href="/signup" className="text-black font-bold">
              Cadastre-se aqui!
            </Link>
          </p>
          <Button className="bg-[#18264A] text-white text-2xl font-ramaraja">Cadastrar-se</Button>
        </div>
      </main>
    </div>
  );
}
