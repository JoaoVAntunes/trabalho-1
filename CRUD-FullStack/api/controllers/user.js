import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const getUser = (req, res) => {
  const q = "SELECT * FROM usuarios WHERE id = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("Usuário não encontrado");
    return res.status(200).json(data[0]);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO usuarios(`nome`, `email`, `telefone`, `data_nascimento`, `cpf`, `posicao`, `meses_empresa`, `departamento` ) VALUES(?, ?, ?, ?, ?, ?, ?, ?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.telefone,
    req.body.data_nascimento,
    req.body.cpf,
    req.body.posicao,
    req.body.meses_empresa,
    req.body.departamento,
  ];

  console.log('Dados recebidos para cadastro:', values); // Adicionar log para verificar os dados recebidos
  
  // Agora passando os valores diretamente (sem o array adicional)
  db.query(q, values, (err) => {
    if (err) {
      console.error('Erro ao cadastrar usuário:', err);  // Log detalhado de erro
      return res.status(500).json({ message: "Erro ao cadastrar o usuário", error: err });
    }
    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  console.log("Requisição recebida para atualizar o usuário:", req.body); // Verificar dados recebidos no backend

  const q =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `telefone` = ?, `data_nascimento` = ?, `cpf` = ?, `posicao` = ?, `meses_empresa` = ?, `departamento` = ? WHERE `id` = ?";
  const values = [
    req.body.nome,
    req.body.email,
    req.body.telefone,
    req.body.data_nascimento,
    req.body.cpf,
    req.body.posicao,
    req.body.meses_empresa,
    req.body.departamento,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) {
      console.error("Erro ao atualizar o usuário:", err); // Verificar erro específico
      return res.status(500).json({ message: "Erro ao atualizar o usuário", error: err });
    }
    console.log("Usuário atualizado com sucesso");
    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};



export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";
  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
