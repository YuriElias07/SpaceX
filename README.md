# 🚀 Buscador de Lançamentos da SpaceX

Um projeto simples em React que consome a API GraphQL da SpaceX para listar e filtrar lançamentos de foguetes.

Este projeto demonstra como consumir a API GraphQL da SpaceX usando `urql` e TypeScript, implementando um filtro de ano para os lançamentos.

## 🛠️ Tecnologias Utilizadas

- **React**
- **TypeScript**
- **GraphQL**
- **urql** (Cliente GraphQL leve para React)
- **SpaceX API** (GraphQL v3)

---

## 💡 Funcionalidades e Observações

- Visualização de lançamentos passados da SpaceX.
- Filtro de lançamentos por ano usando um menu _dropdown_ (select).
- Gerenciamento de estado de _loading_ e erro.

### Observação Importante sobre o Filtro

Este projeto utiliza a API v3 GraphQL da SpaceX (endpoint `https://spacex-production.up.railway.app/`).

Durante o desenvolvimento, foi identificado que o argumento `find: { launch_year: $year }` desta API está **instável ou inoperante**, retornando todos os anos independentemente do filtro.

Para contornar isso, a solução implementada neste projeto é:

1.  Buscar uma lista grande de lançamentos usando GraphQL.
2.  Aplicar o filtro de ano no lado do cliente usando JavaScript (`.filter()`) no `./src/pages/Home/IndexViewModel.tsx`.

---

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

---

## ⚡ Como Rodar o Projeto

Siga os passos abaixo para executar o projeto localmente.

1.  **Clone o repositório**

    ```bash
    git clone [https://github.com/YuriElias07/ChallengueSpaceX.git](https://github.com/YuriElias07/ChallengueSpaceX.git)
    ```

2.  **Acesse a pasta do projeto**

    ```bash
    cd seu-repositorio
    ```

3.  **Instale as dependências**
    (Escolha seu gerenciador de pacotes preferido)

    _Usando npm:_

    ```bash
    npm install
    ```

    _Usando Yarn:_

    ```bash
    yarn install
    ```

4.  **Execute o projeto**
    Este comando inicia o servidor de desenvolvimento.
    _Se for um projeto Vite:_
    ```bash
    npm run dev
    ```
