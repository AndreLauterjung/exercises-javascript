# For Loop

The `for` loop is used when we know how many times we want to repeat an action.

It allows you to execute a block of code multiple times in a controlled way.

---

## Syntax

```js
for (initialization; condition; increment) {
    // code to be executed
}
```

### Explanation of each part:

- **Initialization**: defines the starting point of the loop  
  *(e.g., `let i = 0`)*

- **Condition**: while it is `true`, the loop continues  
  *(e.g., `i <= 100`)*

- **Increment**: executed after each iteration  
  *(e.g., `i++`)*

---

## Simple Example

```js
for (let i = 0; i <= 100; i++) {
    console.log(i);
}
```

This code will print numbers from **0 to 100** in the console.

---

## Array Example

```js
const alimentos = ["Frango", "Arroz", "Macarrão", "Feijão", "Alho"];

for (let i = 0; i < alimentos.length; i++) {
    console.log(alimentos[i]);
}
```

Here, `i` represents the index of the array.

That means:

```js
i = 0 → "Frango"
i = 1 → "Arroz"
i = 2 → "Macarrão"
```

and so on.

---

## Best Practices

- Use clear variable names (when it makes sense)
- Avoid infinite loops (conditions that are always `true`)
- Prefer using `<` instead of `<=` with `.length`

Correct example:

```js
i < array.length
```

---

## Important Tip

You don’t always need to use `for`. In some cases, there are more modern methods such as:

```js
array.forEach()
array.map()
```

However, the `for` loop is still very important, especially for logic and full control over the loop.