let acoes = ["Apagou algo", "tirou print", "removeu caractere"];

function desfazer()
{
    if(acoes.length === 0)
    {
        console.log("Array vazio!");
    }
    else
    {
        let acaoRemovida;
        acaoRemovida = acoes.pop();
        console.log("Ação removida: ", acaoRemovida);
    }
}

desfazer();