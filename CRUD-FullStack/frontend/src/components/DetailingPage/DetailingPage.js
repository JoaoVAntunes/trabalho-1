import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "./DetailingPage_styles";

const DetailingPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8800/${id}`)
      .then((res) => {
        console.log(res.data);  // Verifique os dados retornados da API
        setUser(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar usuário", err);  // Verifique o erro se houver
      });
  }, [id]);
  

  if (!user) return <p>Carregando detalhes...</p>;

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th onlyWeb>Telefone</Th>
          <Th onlyWeb>Data de Nascimento</Th>
          <Th onlyWeb>CPF</Th>
          <Th onlyWeb>Posição</Th>
          <Th onlyWeb>Meses na Empresa</Th>
          <Th onlyWeb>Departamento</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
        <Td width="15%">{user.nome ?? 'N/A'}</Td>
        <Td width="15%">{user.email ?? 'N/A'}</Td>
        <Td width="10%" onlyWeb>{user.telefone ?? 'N/A'}</Td>
        <Td width="10%" onlyWeb>{user.data_nascimento ?? 'N/A'}</Td>
        <Td width="10%" onlyWeb>{user.cpf ?? 'N/A'}</Td>
        <Td width="10%" onlyWeb>{user.posicao ?? 'N/A'}</Td>
        <Td width="10%" onlyWeb>{user.meses_empresa ?? 'N/A'}</Td>
        <Td width="10%" onlyWeb>{user.departamento ?? 'N/A'}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default DetailingPage;
