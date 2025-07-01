"use client";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

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
            <label className="font-ramaraja text-xl">E-mail:</label>
            <Input
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="font-ramaraja text-xl">Senha:</label>
            <Input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            onClick={() => router.push("/products/create")}
            className="bg-[#18264A] text-white text-2xl font-ramaraja hover:cursor-pointer disabled:bg-gray-500 disabled:cursor-default"
            disabled={!isFormValid}
          >
            Fazer Login
          </Button>
          <p className="text-center font-ramaraja text-lg">
            Esqueceu sua senha?{" "}
            <Link href="/reset-password" className="text-black font-bold">
              Recuperar conta
            </Link>
          </p>
          <Button
            onClick={() => router.push("/signup")}
            className="bg-[#18264A] text-white text-2xl font-ramaraja hover:cursor-pointer"
          >
            Cadastrar-se
          </Button>
        </div>
      </main>
    </div>
  );
}
