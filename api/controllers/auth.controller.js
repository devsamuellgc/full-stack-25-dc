const login = (req, res) => {
  if (req.body.email && req.body.password) {
    res.cookie("userId", "3");
    return res.status(200).json({ mensagem: "Usuário logado com sucesso!" });
  }

  return res.status(500).json({ mensagem: "Tente novamente mais tarde!" });
};

export { login };
