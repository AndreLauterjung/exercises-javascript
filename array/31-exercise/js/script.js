let frutas =["Uva", "Lemon", "Tomate"];

let frutaAdd = "Maracujá";

if(frutas.includes(frutaAdd))
{
    console.log("Já existe um item ");
}
else
{
    frutas.push(frutaAdd);
}

console.log(frutas);

/*O método .includes() é como se fosse um detector de metal para o seu array. 
Ele serve para verificar se um elemento específico existe dentro da lista ou não.

O que torna ele muito prático é que ele não te devolve a posição do item, 
nem o item em si. Ele te devolve apenas um booleano: true (verdadeiro) ou false (falso).
Como ele funciona na prática?

Imagine que você tem um sistema de estoque e quer saber se tem "Arroz" no seu array:
JavaScript

let estoque = ["Arroz", "Feijão", "Macarrão"];

let temArroz = estoque.includes("Arroz"); 
console.log(temArroz); // Vai imprimir: true

let temBatata = estoque.includes("Batata");
console.log(temBatata); // Vai imprimir: false

Por que ele é importante para o seu Exercício 4?

No exercício de "Evitando Duplicados", você vai usar o .includes() dentro de um if. A lógica é: "SÓ dê o push SE o array NÃO incluir esse item".

Seria algo mais ou menos assim:
JavaScript

let frutas = ["Maçã", "Uva"];
let novaFruta = "Maçã";

// O sinal de "!" significa "NÃO" (inverte o valor)
if (!frutas.includes(novaFruta)) {
    frutas.push(novaFruta);
    console.log("Fruta adicionada!");
} else {
    console.log("Essa fruta já está na lista, não vou adicionar de novo.");
}
     */