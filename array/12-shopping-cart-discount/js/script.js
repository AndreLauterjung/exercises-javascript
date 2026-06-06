let cart = [
    {
        name: "Shovel",
        price: 89.90,
        category: "Tool"
    },

    {
        name: "Salt Bag",
        price: 25.00,
        category: "Material"
    },

    {
        name: "Tape Measure 5m",
        price: 30.00,
        category: "Tool"
    },

    {
        name: "Nails 1kg",
        price: 18.00,
        category: "Material"
    },

    {
        name: "Hammer",
        price: 45.00,
        category: "Tool"
    }
]

let discount = 10;
let priceWithDiscount;
let priceWithoutDiscount;
let totalValueItems = 0;

for (let i = 0; i< cart.length; i++)
{
    if(cart[i].category === "Tool")
    {
        totalValueItems += cart[i].price - (cart[i].price * (discount/100));
        priceWithDiscount = cart[i].price - (cart[i].price * (discount/100));

        console.log("Item "+ (i+1) +" | "+cart[i].name+" | Price without discount: "+cart[i].price.toFixed(2)+" | Price with discount: "+priceWithDiscount.toFixed(2));
    }
    else
    {
        totalValueItems += cart[i].price;
        priceWithoutDiscount = cart[i].price;
        console.log("Item "+ (i+1) +" | "+cart[i].name+" | Price without discount: "+cart[i].price.toFixed(2));
    }
}

console.log("Total purchase amount: "+totalValueItems.toFixed(2));