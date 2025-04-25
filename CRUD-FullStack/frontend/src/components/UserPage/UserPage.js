import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaTrash, FaEdit, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "./UserPage_styles";
import { FormContainer, InputArea, Input, Label, Button } from "../ManipulationPage/ManipulationPage_styles"; // Importando os estilos

const UserPage = ({ users, setUsers, setOnEdit }) => {
  const [newUser, setNewUser] = useState({
    nome: "",
    email: "",
    telefone: "",
    data_nascimento: "",
    cpf: "",
    posicao: "",
    meses_empresa: 0,
    departamento: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !newUser.nome ||
      !newUser.email ||
      !newUser.telefone ||
      !newUser.data_nascimento ||
      !newUser.cpf ||
      !newUser.posicao ||
      !newUser.meses_empresa ||
      !newUser.departamento
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    try {
      await axios.post("http://localhost:8800", newUser);
      toast.success("Usuário criado com sucesso!");
      setNewUser({
        nome: "",
        email: "",
        telefone: "",
        data_nascimento: "",
        cpf: "",
        posicao: "",
        meses_empresa: 0,
        departamento: "",
      });
      // Atualiza a lista de usuários
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data);
    } catch (err) {
      toast.error("Erro ao salvar!");
    }
  };

  const handleEdit = (item) => {
    setOnEdit(item);
    navigate(`/edit/${item.id}`);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        setUsers(users.filter((user) => user.id !== id));
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <div>
      {/* Formulário de cadastro de novo usuário */}
      <div style={{ marginBottom: "30px", padding: "20px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Cadastrar Novo Usuário</h2>
        <FormContainer onSubmit={handleSubmit}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginBottom: "20px" }}>
            <InputArea>
              <Label>Nome</Label>
              <Input name="nome" value={newUser.nome} onChange={handleInputChange} />
            </InputArea>
            <InputArea>
              <Label>E-mail</Label>
              <Input name="email" type="email" value={newUser.email} onChange={handleInputChange} />
            </InputArea>
            <InputArea>
              <Label>Telefone</Label>
              <Input name="telefone" value={newUser.telefone} onChange={handleInputChange} />
            </InputArea>
            <InputArea>
              <Label>Data de Nascimento</Label>
              <Input name="data_nascimento" type="date" value={newUser.data_nascimento} onChange={handleInputChange} />
            </InputArea>
            <InputArea>
              <Label>CPF</Label>
              <Input name="cpf" value={newUser.cpf} onChange={handleInputChange} />
            </InputArea>
            <InputArea>
              <Label>Posição</Label>
              <Input name="posicao" value={newUser.posicao} onChange={handleInputChange} />
            </InputArea>
            <InputArea>
              <Label>Meses na Empresa</Label>
              <Input name="meses_empresa" type="number" min="0" value={newUser.meses_empresa} onChange={handleInputChange} />
            </InputArea>
            <InputArea>
              <Label>Departamento</Label>
              <Input name="departamento" value={newUser.departamento} onChange={handleInputChange} />
            </InputArea>
          </div>
          <Button type="submit" style={{ width: "100%" }}>Cadastrar</Button>
        </FormContainer>
      </div>

      {/* Tabela de usuários */}
      <Table>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th onlyWeb>Telefone</Th>
            <Th></Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((item, i) => (
            <Tr key={i}>
              <Td width="15%">{item.nome}</Td>
              <Td width="15%">{item.email}</Td>
              <Td width="15%" onlyWeb>{item.telefone}</Td>
              <Td alignCenter width="5%">
                <FaEdit onClick={() => handleEdit(item)} style={{ cursor: "pointer", color: "#007bff" }} />
              </Td>
              <Td alignCenter width="5%">
                <FaTrash onClick={() => handleDelete(item.id)} style={{ cursor: "pointer", color: "#dc3545" }} />
              </Td>
              <Td alignCenter width="5%">
                <FaInfoCircle onClick={() => navigate(`/details/${item.id}`)} style={{ cursor: "pointer", color: "#28a745" }} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default UserPage;
