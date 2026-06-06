let produtos = [
    {
        name: "arroz",
        validade: "no prazo"
    },

    {
        name: "feijão",
        validade: "Vencido"
    }
];

let ultimoProduto;

ultimoProduto = produtos.pop();

if(ultimoProduto.validade === "Vencido")
{
    console.log("Produto vencido!");
    console.log(ultimoProduto);
}