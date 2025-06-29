
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { ImageUpload } from "@/components/ImageUpload";

export default function CreateProductPage() {
  return (
    <div className="bg-[#D2E7FE] min-h-screen p-8">
      <header className="text-center mb-8">
        <h1 className="text-6xl font-normal font-sedan-sc">HypeWear</h1>
        <hr className="border-black mt-4" />
      </header>
      <main className="bg-white rounded-3xl p-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-ramaraja mb-8">NOVO PRODUTO</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 flex flex-col gap-6">
            <div>
              <h3 className="text-3xl font-ramaraja mb-4">Nome e descrição</h3>
              <div className="flex flex-col gap-4">
                <Input label="Nome" />
                <Textarea label="Descrição" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-ramaraja mb-4">Midia</h3>
              <ImageUpload />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-3xl font-ramaraja mb-4">Estoque</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Checkbox label="P" />
                  <Checkbox label="M" />
                  <Checkbox label="G" />
                  <Checkbox label="GG" />
                </div>
                <div className="flex flex-col gap-2">
                  <Input />
                  <Input />
                  <Input />
                  <Input />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-ramaraja mb-4">Valor:</h3>
              <Input />
            </div>
            <Button>Adcionar Variação</Button>
            <Button className="bg-[#18264A] text-white">SALVAR</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
