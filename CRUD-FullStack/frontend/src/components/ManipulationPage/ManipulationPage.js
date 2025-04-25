import React, { useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FormContainer, InputArea, Input, Label, Button } from "./ManipulationPage_styles";

const ManipulationPage = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;
      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.telefone.value = onEdit.telefone;
      user.data_nascimento.value = onEdit.data_nascimento;
      user.cpf.value = onEdit.cpf;
      user.posicao.value = onEdit.posicao;
      user.meses_empresa.value = onEdit.meses_empresa;
      user.departamento.value = onEdit.departamento;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formulário enviado"); // Verificar se o evento está sendo disparado
    const user = ref.current;

    // Verificar os valores dos campos
    console.log("Valores dos campos:", {
      nome: user.nome.value,
      email: user.email.value,
      telefone: user.telefone.value,
      data_nascimento: user.data_nascimento.value,
      cpf: user.cpf.value,
      posicao: user.posicao.value,
      meses_empresa: user.meses_empresa.value,
      departamento: user.departamento.value,
    });

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.telefone.value ||
      !user.data_nascimento.value ||
      !user.cpf.value ||
      !user.posicao.value ||
      !user.meses_empresa.value ||
      !user.departamento.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    const newUser = {
      nome: user.nome.value,
      email: user.email.value,
      telefone: user.telefone.value,
      data_nascimento: user.data_nascimento.value,
      cpf: user.cpf.value,
      posicao: user.posicao.value,
      meses_empresa: Number(user.meses_empresa.value),
      departamento: user.departamento.value,
    };

    try {
      if (onEdit) {
        console.log("Atualizando usuário..."); // Verificar se a lógica de update está sendo chamada
        await axios.put("http://localhost:8800/" + onEdit.id, newUser);
        toast.success("Usuário atualizado com sucesso!");
      } else {
        console.log("Criando novo usuário..."); // Verificar se a lógica de criação está sendo chamada
        await axios.post("http://localhost:8800", newUser);
        toast.success("Usuário criado com sucesso!");
      }

      // Limpar os campos após salvar
      user.nome.value = "";
      user.email.value = "";
      user.telefone.value = "";
      user.data_nascimento.value = "";
      user.cpf.value = "";
      user.posicao.value = "";
      user.meses_empresa.value = "";
      user.departamento.value = "";

      setOnEdit(null);
      getUsers();  // Atualizar a lista de usuários após a alteração

    } catch (err) {
      console.error("Erro ao salvar:", err); // Verificar se há algum erro
      toast.error("Erro ao salvar!");
    }
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="telefone" />
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="data_nascimento" type="date" />
      </InputArea>
      <InputArea>
        <Label>CPF</Label>
        <Input name="cpf" />
      </InputArea>
      <InputArea>
        <Label>Posição</Label>
        <Input name="posicao" />
      </InputArea>
      <InputArea>
        <Label>Meses na Empresa</Label>
        <Input name="meses_empresa" type="number" min="0" />
      </InputArea>
      <InputArea>
        <Label>Departamento</Label>
        <Input name="departamento" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default ManipulationPage;
