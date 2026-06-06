### Arrays

Os arrays em JavaScript são usados para armazenar vários valores em uma única variável.

Diferente dos objetos, que organizam dados em propriedades (chave: valor), os arrays organizam os elementos por posição, chamada de índice.

Exemplo básico:

```js
const exampleList = [0, 1, 2, 3, 4];
```



Podemos imaginar um array como uma lista ordenada de itens.

```js
const list = ["Beef", "Rice", "Noodle", "Bean"];
```

list[0] retorna "Beef"
list[1] retorna "Rice"
list[2] retorna "Noodle"
list[3] retorna "Bean"



### Propriedades dos Arrays

Arrays também possuem propriedades úteis, como:

```js
lista.length // retorna a quantidade de elementos no array
```



### Exemplos de Arrays

É possível criar um Array a partir de variáveis já existentes em um programa, como no exemplo abaixo. 

```js
{
    let item1 = "rice";
    let item2 = "Banana";
    let item3 = "Candy";
    let item4 = "Milk";

    const listMarket = [
        item1, 
        item2, 
        item3, 
        item4
    ];

    console.log(listMarket);
}
```



---



Para adicionar conteúdo em posições específicas do Array, basta "chamar" o Arrray, indicar a posição em que o conteúdo será alocado ([0], [1], etc.) e, usando o operador de atribuição, digitar a variável que ocupará posição indicada. 

```js
{
    let item1 = "Paper";
    let item2 = "Water";
    let item3 = "Soap";
    let item4 = "Shampoo";

    const listMarket = []; //Um Array sem conteúdo.

    listMarket[0] = item1;
    listMarket[1] = item2;
    listMarket[2] = item3;
    listMarket[3] = item4;

    console.log(listMarket);
}
```


---



Também é possível criar um array utilizando uma sintaxe diferente com a palavra-chave `new`.

Nesse caso, usamos `new Array()` para criar um novo array e passamos os valores como argumentos dentro dos parênteses.

```js
{
  const listMarket = new Array("Tomate", "Faca", "Tigela", "Sorvete");

  console.log(listMarket);
}
```

Essa é uma forma alternativa de criar arrays. No entanto, a forma mais comum e recomendada é utilizando colchetes `[]`.

```js
const listMarket = ["Tomato", "Lemon", "Corn", "Ice cream"];
```

O `new` é utilizado para criar uma nova instância de um objeto. No caso do `Array`, ele cria um novo array.



---



É possível acessar um valor específico que está dentro de um array.

Basta "chamar" o array e em seguida digitar a posição em que um elemento se encontra dentro de chaves [].

Abaixo, chamamos o item e armazenamos ele na variável `itemX`.

```js
{
    let item1 = "rice";
    let item2 = "Banana";
    let item3 = "Candy";
    let item4 = "Milk";

    const listMarket = [
        item1, 
        item2, 
        item3, 
        item4
    ];

    let itemX = listMarket[2];
    console.log(itemX);
}
```


---



É possível mudar o valor de um item dentro do array. 

Basta "chamar" o array, indicar a posição em que você quer armazenar/atualizar um item, e, após o operador de atribuição, digitar o conteúdo que será armazenado dentro do array.

```js
{
    let item1 = "rice";
    let item2 = "Banana";
    let item3 = "Candy";
    let item4 = "Milk";

    const listMarket = [
        item1, 
        item2, 
        item3, 
        item4
    ];

    listMarket[1] = "Chiken";
    console.log(listMarket);
}
```


---



Há uma diferença entre Array e Objetos.

No caso do array, precisamos indicar a posição em que se encontra um elemento.
No objeto, vamos até uma propriedade determinada.

```js
{
   const listMarket = ["Cake", "Sugar", "Chocolate Bar"]; //array

   const people = {name: "João", age: 23}; //object

   console.log(listMarket[1]); //accessing a value in an array
   console.log(people.name); //accessing a property in an object
}
```


---



Há uma maneira de descobrir a quantidades de itens armazenados dentro de um array, basta "chamar" o Array e em seguida utilizar a propriedade lenght do JS, que retornará o comprimento do array.

```js
{
    const listMarket = ["Cake", "Sugar", "Chocolate Bar"];
    console.log(listMarket.length);
}
```


---



É possível acessar o último elemento de um array utilizando a propriedade `length`.

Como os arrays começam no índice `0`, o último elemento sempre estará na posição `length - 1`.

Isso acontece porque a propriedade `length` retorna a quantidade total de elementos do array, enquanto os índices começam em `0`.

Por exemplo, um array com 4 itens possui índices de `0` a `3`. Portanto, o último índice será sempre `length - 1`.

```js
{
  const listMarket = ["Cake", "Sugar", "Chocolate Bar", "Pasta"];
  
  console.log(listMarket[listMarket.length - 1]);
}
```


---



Existem algumas maneiras de adicionar itens em um array.

**1ª maneira: utilizando o método `push`:**

O método `push()` adiciona um ou mais elementos ao final do array.

```js
{
  const listMarket = ["Cake", "Sugar", "Chocolate Bar", "Pasta"];
  
  listMarket.push("Juice");
  console.log(listMarket[listMarket.length - 1]); 
}
```

Nesse caso, o valor `"Juice"` é adicionado na última posição do array.

O método `push()` também retorna o novo tamanho do array após a adição do elemento.



**2ª maneira: adicionando um item usando o índice**

Também é possível adicionar um novo elemento ao final do array utilizando diretamente o índice.

Nesse caso, usamos `listMarket.length` como posição para inserir o novo valor.

```js
{
  const listMarket = ["Cake", "Sugar", "Chocolate Bar", "Pasta"];
  
  listMarket[listMarket.length] = "Coffee";
  console.log(listMarket); 
}
```

Isso funciona porque a propriedade `length` sempre indica a próxima posição disponível no array.

Ou seja, ao usar `listMarket.length`, estamos adicionando o novo elemento exatamente no final do array.

Apesar de funcionar, essa abordagem é menos utilizada. O método `push()` é mais comum e recomendado para esse tipo de operação.



**3ª maneira: adicionando um item em um índice específico**

Também é possível adicionar um elemento em uma posição específica do array, mesmo que ela ainda não exista.

```js
{
  const listMarket = ["Cake", "Sugar", "Chocolate Bar", "Pasta"];
  
  listMarket[9] = "Orange";
  console.log(listMarket); 
}
```

Nesse caso, o valor `"Orange"` é adicionado na posição `9`.

Como as posições entre o último índice existente e o novo índice não possuem valores definidos, o JavaScript cria espaços vazios (empty slots) no array.

Ou seja, o array passa a ter um tamanho maior, mas com posições sem valor definido entre os elementos.

Esse tipo de abordagem não é muito comum e deve ser usado com cuidado, pois pode deixar o array com "espaços vazios", dificultando a manipulação dos dados.



---



É possível verificar se um valor é um array utilizando o método `Array.isArray()`.

```js
{
  const listMarket = ["Cake", "Sugar", "Chocolate Bar", "Pasta"];
  
  console.log(Array.isArray(listMarket)); // retorna true se for um array
}
```

O método `Array.isArray()` retorna `true` caso o valor seja um array, e `false` caso contrário.



---



###  MÉTODO JOIN()

- O método `join()` em JavaScript serve para transformar um array (matriz) em uma string, juntando todos os elementos com um separador.

- Sintaxe

```js
array.join(separador)
```

separador = é opcional
se não passar nada, ele usa vírgula (,) por padrão

## Exemplo básico

```js
let numeros = [1, 2, 3, 4];

let resultado = numeros.join();

console.log(resultado); // "1,2,3,4"
```

- Usando separador personalizado:

```js
let palavras = ["JavaScript", "é", "top"];

let frase = palavras.join(" ");

console.log(frase); // "JavaScript é top"

```
Sem separador (grudar tudo):

```js
let letras = ["A", "B", "C"];

console.log(letras.join("")); // "ABC"
```

### Detalhes importantes

O `join()` não altera o array original
Ele sempre retorna uma string
Funciona só com arrays (não com objetos comuns).



---

### Arrays Multidimensionais (Matrizes)

Em JavaScript, uma "matriz" nada mais é do que um array dentro de outro array.

```js
const matriz = [
  [1, 2],
  [3, 4]
];
```

Nesse caso:

matriz[0] retorna [1, 2]
matriz[0][1] retorna 2
matriz[1][0] retorna 3