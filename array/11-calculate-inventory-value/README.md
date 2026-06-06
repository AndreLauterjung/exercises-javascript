## Exercise 11 - calculate-inventory-value

### Description:

Think about a construction site: a brick is not just a "brick".
It has a type, price, and quantity.
In JavaScript, we use an Object { } to store this information together.

Here's how we combine Arrays with Objects:

```js
let inventory = [
    { name: "Cement", price: 35.00, quantity: 10 },
    { name: "Sand", price: 120.00, quantity: 2 },
    { name: "Brick", price: 1.50, quantity: 500 }
];
```

"Construction Master" Challenge

Let's see if you can apply what you've learned about summing and looping in something that looks like a real system!


- The Challenge:

Use the inventory array above (copy and paste it into your code).

Create a variable `totalInventoryValue = 0`.

Use a for loop to iterate through the list.

Inside the loop, calculate the value of each item (price times quantity) and add it to `totalInventoryValue`.

- Tip: To access the price of the current item, use `inventory[i].price`.

At the end, display the total value of everything in the inventory.

## Expected Output

```js
/*
BUY URGENTLY: Cement
Item: Cement | Total value of item: 350
BUY URGENTLY: Sand
Item: Sand | Total value of item: 240
Item: Brick | Total value of item: 750
Total value of the products in inventory: 1340
...*/
```

### Technologies

- JavaScript
- Node.js

### How to run

Download the latest version of `Node.js` on your computer.
In the terminal (such as VS Code), run the file using:

**node path/to/script.js**

- The result will be displayed in the terminal using `console.log`.