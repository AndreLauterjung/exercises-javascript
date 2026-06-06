function pagamento (valor, acao)
{
    const valorGorjeta = acao(valor);

    console.log("Resultado: " + valorGorjeta);
};

const calcularGorjeta = (valor) =>
{
    return valor * (10/100);
}

pagamento(200, calcularGorjeta);