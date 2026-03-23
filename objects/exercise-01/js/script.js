function confirm()
{
    let shoppingCart = {
    product: String(document.getElementById("product").value),
    price: Number(document.getElementById("price").value),
    quantity: Number(document.getElementById("quantity").value),
    
    total: function()
    {
        return this.price * this.quantity;
    }
}
        document.getElementById("returnPurchase").innerHTML=("<b>Finished Purchase!</br>")+
        ("Final price: US$ ")+(shoppingCart.total());
}