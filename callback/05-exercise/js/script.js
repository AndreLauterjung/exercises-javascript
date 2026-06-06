function autenticar (usuario, acao)
{
    const resultadoFinal = acao(usuario);

    console.log("verificando usuário: "+usuario);
    console.log("----------------------");
    console.log(resultadoFinal);
}

const boasVindas = (usuario) =>
{
    return "bem-vindo, "+usuario;
}
autenticar("andre", boasVindas);