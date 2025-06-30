# HypeWear

HypeWear é um aplicativo de comércio eletrônico criado com Next.js, projetado para proporcionar uma experiência de compra perfeita para roupas da moda. Foi construido como apoio para um dos projetos integradors do curso de Análise e Desenvolvimento de Sistemas (ADS) da Universidade de Caxias do Sul (UCS).

## Recursos

- **Lista de produtos**: navegue por uma variedade de produtos com descrições detalhadas.
- **Carrinho de compras**: adicione e gerencie itens em seu carrinho.
- **Autenticação do usuário**: processos seguros de login e cadastro.
- **Gerenciamento de produtos**: crie novas listas de produtos.
- **Design responsivo**: otimizado para vários tamanhos de tela.

## Tecnologias utilizadas

- **Next.js**: estrutura React para a criação de aplicativos web de alto desempenho.
- **React**: biblioteca JavaScript para a criação de interfaces de usuário.
- **TypeScript**: superconjunto de JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: framework CSS utilitário para o desenvolvimento rápido de interfaces de usuário.
- **ESLint**: Utilitário de linting plugável para JavaScript e JSX.

## Introdução

Siga estas etapas para configurar e executar o projeto localmente.

### Pré-requisitos

Certifique-se de ter o seguinte instalado:

- Node.js (v18 ou superior recomendado)
- npm ou pnpm (pnpm é usado neste projeto)

### Instalação

1.  Clone o repositório:

```bash
git clone https://github.com/tiagordebarros/hype-wear.git
cd hype-wear
```

2.  Instale as dependências:

```bash
pnpm install
```

### Executando o servidor de desenvolvimento

Para executar o aplicativo no modo de desenvolvimento com recarga a quente:

```bash
pnpm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Compilando para produção

Para compilar o aplicativo para produção:

```bash
pnpm run build
```

Isso criará uma compilação otimizada no diretório `.next`.

### Executando no modo de produção

Para iniciar o servidor de produção:

```bash
pnpm run start
```

### Linting

Para executar o linter:

```bash
pnpm run lint
```

## Estrutura do projeto

```
hype-wear/
├───public/             # Ativos estáticos (imagens, fontes)
├───src/
│   ├───app/            # Páginas e layouts do roteador do aplicativo Next.js
│   │   ├───cart/
│   │   ├───login/
│   │   ├───products/create/
│   │   ├───signup/
│   │   └───store/
│   ├───componentes/     # Componentes de interface do usuário reutilizáveis
│   ├───contexto/        # API React Context para estado global
│   └───globals.css     # Estilos globais
├───.gitignore
├───next.config.ts      # Configuração do Next.js
├───package.json        # Dependências e scripts do projeto
├───pnpm-lock.yaml      # Arquivo de bloqueio pnpm
├───postcss.config.mjs  # Configuração PostCSS
├───README.md           # Arquivo README do projeto
├───tsconfig.json       # Configuração TypeScript
└───eslint.config.mjs   # Configuração ESLint
```

## Contribuições

Contribuições são bem-vindas! Faça um fork do repositório e crie uma solicitação pull com suas alterações.
