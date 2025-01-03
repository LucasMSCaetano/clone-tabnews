function status(request, response) {
  response.status(200).json({ chave: "alunos do cursõeso" });
}

export default status;
