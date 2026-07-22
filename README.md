# Gerenciador de Tarefas - Next.js 16

Aplicação de lista de tarefas desenvolvida com Next.js (App Router), TypeScript, Tailwind CSS e Jest para testes unitários e de componentes.

## 🛠️ Tecnologias Utilizadas

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Testes:** Jest e React Testing Library

## 📋 Pré-requisitos

- Node.js (versão 18.x ou superior)
- npm (gerenciador de pacotes)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
```

2. Acesse a pasta do projeto:
```bash
cd SEU_REPOSITORIO
```

3. Instale as dependências:
```bash
npm install
```

## 🚀 Executando a Aplicação

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🧪 Executando os Testes

A suíte de testes é dividida por responsabilidades unitárias:

- **Hook personalizado (`useContadorDeTarefas`):** Valida a lógica de contagem total e de tarefas concluídas via `renderHook`.
- **Componente `NovaTarefa`:** Valida a digitação no input, o evento de submissão do formulário e a limpeza do campo.
- **Componente `ListaTarefas`:** Valida a renderização dos itens, marcação de conclusão e remoção.

Para rodar os testes:

```bash
npm test
```