let vazio = [];

let resultado;

resultado = vazio.pop();

console.log(resultado);


//A explicação técnica:
//O método .pop() foi projetado para sempre tentar devolver algo.
//Quando o array tem itens, ele remove e te entrega o item.
//Quando o array não tem nada, o JavaScript não "quebra" o
// programa (diferente de algumas linguagens mais rígidas), 
// ele simplesmente te devolve um valor padrão para dizer
//  "procurei e não achei nada aqui". Esse valor é o undefined.