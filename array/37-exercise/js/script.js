let notificacoes = [];

function curtida()
{
    notificacoes.push("Curtida recebida");
}

function mensagemDireta()
{
    notificacoes.push("Mensagem recebida");
}

function novoSeguidor()
{
    notificacoes.push("Você tem um novo seguidor")
}

curtida();
mensagemDireta();
novoSeguidor();
curtida();
novoSeguidor();

console.log("Antes da limpeza: ", notificacoes);

while(notificacoes.length > 2)
{
    notificacoes.shift();
}

console.log("depois da limpeza: ", notificacoes);