## Exercise 12 - shopping-cart-discount

### Description:

This challenge is what we call a "Mini POS" (Point of Sale).

Imagine you are at the checkout of a construction materials store, and a customer arrives with a shopping list.

- Scenario: The Customer's Cart

```js
let cart = [
    { name: "Shovel", price: 89.90, category: "Tool" },
    { name: "Salt Bag", price: 25.00, category: "Material" },
    { name: "Tape Measure 5m", price: 30.00, category: "Tool" },
    { name: "Nails 1kg", price: 18.00, category: "Material" },
    { name: "Hammer", price: 45.00, category: "Tool" }
];
```

- Your Mission:

Calculate the Total: Loop through the cart and sum the price of all items.

Apply Tool Discount: The boss went crazy! Every "Tool" has a 10% discount.

- Tip: Inside the loop, use an if statement to check if

```js
cart[i].category == "Tool".
```

Calculation: If it is a tool, the price added should be price * 0.9 Or use another method for the 10% discount.

Otherwise, use the full price.

Final Report: ´rint the name of each item and the price that was charged
(with or without discount).

Checkout: At the end, display the total value of the sale.

## Expected Output

```js
/*
Item 1 | Shovel | Price without discount: 89.90 | Price with discount: 80.91
Item 2 | Salt Bag | Price without discount: 25.00
Item 3 | Tape Measure 5m | Price without discount: 30.00 | Price with discount: 27.00
Item 4 | Nails 1kg | Price without discount: 18.00
Item 5 | Hammer | Price without discount: 45.00 | Price with discount: 40.50
Total purchase amount: 191.41
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