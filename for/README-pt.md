### For

O laço de repetição for é usado quando sabemos quantas vezes queremos repetir uma ação.

Ele permite executar um bloco de código várias vezes de forma controlada.



**Sintaxe**

```js
for (inicialização; condição; incremento) {
    // código a ser executado
}
```

Explicando cada parte:

**Inicialização**: define o ponto de partida do loop
(ex: let i = 0)

**Condição**: enquanto for true, o loop continua
(ex: i <= 100)

**Incremento**: executado a cada repetição
(ex: i++)


Exemplo simples:

```js
for (let i = 0; i <= 100; i++) {
    console.log(i);
}
```

Esse código vai exibir números de 0 até 100 no console.

---


## Exemplo com Array:

```js
const alimentos = ["Frango", "Arroz", "Macarrão", "Feijão", "Alho"];

for (let i = 0; i < alimentos.length; i++) {
    console.log(alimentos[i]);
}
```

Aqui, o `i` representa o índice do array.

Ou seja:
```js
i = 0 → "Frango"
i = 1 → "Arroz"
i = 2 → "Macarrão"
```
etc.

### Boas práticas

- Use nomes claros para variáveis (quando fizer sentido)
- Evite loops infinitos (condição sempre true)
- Prefira usar < ao invés de <= com .length

- Exemplo correto:

```js
i < array.length
```

### Dica importante

Nem sempre você precisa usar for. Em alguns casos, existem métodos mais modernos como:

array.forEach()
array.map()

Mas o for continua sendo muito importante, principalmente para lógica e controle total do loop.