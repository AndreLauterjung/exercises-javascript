let convidados = ["Ana", "Bob", "Amanda", "Carlos", "Arthur"];
let comecaComA = [];
let naoComecaComA = [];

for(let i = 0; i<convidados.length; i++)
{
    if(convidados[i].startsWith("A"))
    {
        comecaComA.push(convidados[i]);
    }
    else
    {
        naoComecaComA.push(convidados[i]);
    }
}

console.log(("nomes que começam com A: "), comecaComA.join(" -> "));
console.log("------------------------------");
console.log(("nomes que NÃO começam com A: "), naoComecaComA.join(" -> "));