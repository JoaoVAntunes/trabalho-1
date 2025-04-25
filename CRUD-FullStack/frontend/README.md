# Projeto CRUD React + Node.js

Este é um projeto de CRUD (Create, Read, Update, Delete) utilizando **React** no frontend e **Node.js** com **MySQL** no backend. O objetivo é gerenciar usuários em uma plataforma simples.

## ⚙️ Como rodar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
2. Importe e configure o banco de dados
Importe o arquivo Dump20250418.sql localizado na raiz do projeto no MySQL Workbench.

Acesse o seguinte arquivo para configurar as credenciais do banco de dados:

bash
Copiar
Editar
cd backend/db.js
Atualize as configurações de usuário, senha e nome do database de acordo com o seu ambiente no MySQL Workbench.

3. Configure o frontend e o backend
Frontend
Acesse o diretório do frontend:

bash
Copiar
Editar
cd frontend/reactproject/
Execute o comando para instalar as dependências:

bash
Copiar
Editar
npm install
Backend
Acesse o diretório do backend:

bash
Copiar
Editar
cd backend/
Execute o comando para instalar as dependências:

bash
Copiar
Editar
npm install
4. Rodando o projeto
Frontend
Inicie o frontend acessando o diretório:

bash
Copiar
Editar
cd frontend/reactproject/
Em seguida, execute o seguinte comando para iniciar:

bash
Copiar
Editar
npm start
Backend
Inicie o backend acessando o diretório:

bash
Copiar
Editar
cd backend/
Em seguida, execute o seguinte comando para iniciar:

bash
Copiar
Editar
npm start
5. Acesso ao sistema
O frontend estará acessível no endereço: http://localhost:3000

O backend (API) estará acessível no endereço: http://localhost:8800