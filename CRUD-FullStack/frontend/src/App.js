import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UsersPage from "./components/UserPage/UserPage.js";
import ManipulationPage from "./components/ManipulationPage/ManipulationPage.js";
import DetailingPage from "./components/DetailingPage/DetailingPage.js";
import { Container, Title } from "./styles/App_styles";
import { Navigate } from "react-router-dom";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data);
    } catch (err) {
      console.error("Erro ao buscar usuários", err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Router>
      <Container>
        <Title>João Vitor - CRUD de Usuários</Title>
        <Link to="/users">Usuários</Link>
      </Container>

      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route
          path="/users"
          element={<UsersPage users={users} setUsers={setUsers} setOnEdit={setOnEdit} />}
        />
        <Route
          path="/edit/:id"  // Alterei a rota para aceitar o id do usuário
          element={<ManipulationPage getUsers={getUsers} onEdit={onEdit} setOnEdit={setOnEdit} />}
        />
        <Route path="/details/:id" element={<DetailingPage />} />
      </Routes>

      <GlobalStyle />
    </Router>
  );
}

export default App;
