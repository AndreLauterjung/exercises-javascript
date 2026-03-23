let car = {
    model: "Fusca",
    speed: 0,

    accelerateCar: function(accelerateValue)
    {
        this.speed+=accelerateValue;
        return this.speed;
    },

    breakCar: function (downSpeed)
    {
        this.speed =  this.speed - downSpeed;
        return this.speed;
    },

    status: function()
    {
        return this.speed;
    }
}

console.log(car.accelerateCar(9));

if(car.speed <= 0)
{
    console.log("The speed is 0!");
}
else
{
    console.log("Speed of car: "+car.status());
}