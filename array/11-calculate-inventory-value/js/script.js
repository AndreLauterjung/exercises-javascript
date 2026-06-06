let inventory = [
    {
        name: "Cement",
        price: 35.00,
        amount: 10
    },

    {
        name: "Sand",
        price: 120.00,
        amount: 2
    },

    {
        name: "Brick",
        price: 1.50,
        amount: 500
    }
];

let totalInventoryValue = 0;
let itemValue; 

for (let i = 0; i < inventory.length; i++)
    {
    if(inventory[i].amount < 20)
    {
        console.log("BUY URGENTLY: "+inventory[i].name);
    }
    
    itemValue = inventory[i].amount * inventory[i].price;
    totalInventoryValue += itemValue;

    console.log("Item: "+inventory[i].name+" | Total value of item: "+itemValue);
};

console.log("Total value of the products in inventory: "+totalInventoryValue);