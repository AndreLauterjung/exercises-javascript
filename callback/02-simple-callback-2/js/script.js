function calculo (num, operacao)
{
    console.log("Iniciando função calculo");
    return operacao(num);
}


const double = (num) =>
{
    console.log("Resultado final: ");
    return num = num*2;
}

console.log(calculo(5, double));