function mensagem (texto, tonalidade)
{
    const resultadoFinal = tonalidade(texto);

    console.log("Resultado: "+resultadoFinal);
}

const grito = (texto) =>
{

    return texto.toUpperCase();
}

const baixo = (texto) =>
{
    return texto.toLowerCase();
}

mensagem("gabigooool", grito);
mensagem("NEYMAAAAAAAAR", baixo);