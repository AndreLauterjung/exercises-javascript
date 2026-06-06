function saudar (n, acao)
{
    console.log("---Início da saudação ---");

    acao(n);
}

const formal = (n) =>
{
    console.log("Olá sr."+n)
}

const zoeira = (n) =>
{
    console.log("Faaaaaaala mano "+n);
}

saudar("André", formal);
saudar("André", zoeira);