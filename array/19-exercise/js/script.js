let nome = "André";
let idade = 23;
let cidade = "Rio de Janeiro";
let profissão = "Desenvolvedor";

let linhaPlanilha = [nome, idade, cidade, profissão];

let resultadoFinal;

if(cidade === "Rio de Janeiro")
{
    linhaPlanilha.push("Carioca");
}

resultadoFinal = linhaPlanilha.join(", ");

console.log(resultadoFinal);