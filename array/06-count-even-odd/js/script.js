const numbers = [1,23,21, 47, 7, 17, 422, 912, 47];

let even = 0;
let odd = 0;

for(let i = 0; i< numbers.length;i++)
{
    if(numbers[i] % 2 == 0)
    {
        even++;
    }
    else
    {
        odd++;
    }
}

console.log("Amount of numbers odd: "+odd);
console.log("Amount of numbers even: "+even);