let convidadosVip = [];

let convidado = {
    nome: "André",
    idade: 23
}

if(convidado.idade >=18)
{
    convidadosVip.push(convidado.nome);
    console.log("Seu nome foi adicionado à lista de convidados VIP!");
    console.log(convidadosVip);
}
else
{
    console.log("Seu nome não foi adicionado à lista de convidados VIP!");
}