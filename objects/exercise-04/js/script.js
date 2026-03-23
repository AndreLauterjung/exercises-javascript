let product = {
    name: "Notebook",
    price: 3000,
    discount: 10, //10% of discount

    finalPrice: function()
    {
        this.price = this.price - (this.price*(this.discount/100));
        return "Final price of "+this.name+": US$ "+ this.price
    }
}

console.log(product.finalPrice());