function validarCompra (preco, regra)
{
    return regra(preco);
}

const precoMaior = (preco) =>
{
    return preco>100;
}

const resultado = validarCompra(99, precoMaior);

if(resultado != false)
{
    console.log("Compra inválida! O valor é maior que 100"+resultado)
}
else
{
    console.log("A compra é válida! O valor é menor que 100! ");
}