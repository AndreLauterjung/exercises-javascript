### Arrays

Arrays in JavaScript are used to store multiple values in a single variable.

Unlike objects, which organize data using properties (key: value), arrays organize elements by position, called an index.

Basic example:

```js
const exampleList = [0, 1, 2, 3, 4];
```

We can think of an array as an ordered list of items.

```js
const list = ["Beef", "Rice", "Noodle", "Bean"];

list[0] returns "Beed"
list[1] returns "Rice"
list[2] returns "Noodle"
list[3] returns "Bean"
```

### Array Properties

Arrays also have useful properties, such as:

```js
list.length // returns the number of elements in the array
```

### Array Examples

It is possible to create an array using variables that already exist in the program, as shown below:

```js
{
    let item1 = "Rice";
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


To add values to specific positions in an array, you just need to call the array, specify the index ([0], [1], etc.), and assign a value using the assignment operator.

```js
{
    let item1 = "Paper";
    let item2 = "Water";
    let item3 = "Soap";
    let item4 = "Shampoo";

    const listMarket = []; // Empty array

    listMarket[0] = item1;
    listMarket[1] = item2;
    listMarket[2] = item3;
    listMarket[3] = item4;

    console.log(listMarket);
}
```

It is also possible to create an array using a different syntax with the `new` keyword.

In this case, we use `new Array()` to create a new array and pass the values as arguments inside the parentheses.

```js
{
  const listMarket = new Array("Tomato", "Knife", "Bowl", "Ice Cream");

  console.log(listMarket);
}
```

This is an alternative way to create arrays. However, the most common and recommended way is using square brackets [].

```Js
const listMarket = ["Tomato", "Lemon", "Corn", "Ice cream"];
```

The `new` keyword is used to create a new instance of an object. In the case of `Array`, it creates a new array.


---


It is possible to access a specific value inside an array.

You just need to call the array and use the index of the element inside square brackets [].

Below, we access an item and store it in the variable `itemX`.

```js
{
    let item1 = "Rice";
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


It is possible to change the value of an item inside an array.

Just call the array, specify the index you want to update, and assign a new value.

```js
{
    let item1 = "Rice";
    let item2 = "Banana";
    let item3 = "Candy";
    let item4 = "Milk";

    const listMarket = [
        item1, 
        item2, 
        item3, 
        item4
    ];

    listMarket[1] = "Chicken";
    console.log(listMarket);
}
```

---


There is a difference between arrays and objects.

In arrays, we access values by index.
In objects, we access values by property.

```js
{
   const listMarket = ["Cake", "Sugar", "Chocolate Bar"]; // array

   const people = {name: "João", age: 23}; // object

   console.log(listMarket[1]); // accessing a value in an array
   console.log(people.name); // accessing a property in an object
}
```


---


There is a way to find out how many items are stored in an array by using the length property.

```js
{
    const listMarket = ["Cake", "Sugar", "Chocolate Bar"];
    console.log(listMarket.length);
}
```

---



It is possible to access the last element of an array using the `length` property.

Since arrays start at index `0`, the last element is always at position `length - 1`.

This happens because `length` returns the total number of elements, while indexing starts at `0`.

For example, an array with 4 items has indexes from `0` to `3`. Therefore, the last index is always `length - 1`.

```js
{
  const listMarket = ["Cake", "Sugar", "Chocolate Bar", "Pasta"];
  
  console.log(listMarket[listMarket.length - 1]);
}
```

---


There are several ways to add items to an array.

**1st way: using the `push` method**

The `push()` method adds one or more elements to the end of an array.

```js
{
  const listMarket = ["Cake", "Sugar", "Chocolate Bar", "Pasta"];
  
  listMarket.push("Juice");
  console.log(listMarket[listMarket.length - 1]); 
}
```

In this case, `"Juice"` is added to the last position of the array.

The `push()` method also returns the new length of the array after the addition.


**2nd way: using the index**

It is also possible to add a new element to the end of the array by using the index directly.

```js
{
  const listMarket = ["Cake", "Sugar", "Chocolate Bar", "Pasta"];
  
  listMarket[listMarket.length] = "Coffee";
  console.log(listMarket); 
}
```

This works because the `length` property always points to the next available index.

So, by using `listMarket.length`, we are adding the new element at the end of the array.

Although it works, this approach is less common. The `push()` method is more recommended.



**3rd way: adding an item at a specific index**



It is also possible to add an element at a specific index, even if that position does not yet exist.

```js
{
  const listMarket = ["Cake", "Sugar", "Chocolate Bar", "Pasta"];
  
  listMarket[9] = "Orange";
  console.log(listMarket); 
}
```

In this case, `"Orange"` is added at index `9`.

Since the positions between the last existing index and the new index are not defined, JavaScript creates empty slots in the array.

This means the array becomes larger, but contains empty positions between elements.

This approach is not very common and should be used with caution, as it can make data handling more difficult.

---



It is possible to check if a value is an array using the `Array.isArray()` method.

```js
{
  const listMarket = ["Cake", "Sugar", "Chocolate Bar", "Pasta"];
  
  console.log(Array.isArray(listMarket)); // returns true if it is an array
}
```
The `Array.isArray()` method returns `true` if the value is an array, and `false` otherwise.


---


### Multidimensional Arrays (Matrices)

In JavaScript, a "matrix" is simply an array inside another array.

```js
const matrix = [
  [1, 2],
  [3, 4]
];
```

In this case:

matrix[0] returns [1, 2]
matrix[0][1] returns 2
matrix[1][0] returns 3