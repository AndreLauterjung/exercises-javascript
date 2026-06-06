let num = [10, 20, 30, 40, 50];
let total = 0;

function sumNum()
{
    if(num.length === 0)
    {
        console.log("Array vazio");
    }
    else
    {
        total = total + num.pop();

        console.log(num);
        console.log(total);
    }
}

sumNum();
sumNum();
console.log("Programa terminado!");