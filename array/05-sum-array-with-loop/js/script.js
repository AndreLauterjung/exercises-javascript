const numbers = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < numbers.length ; i++)
{
    sum += numbers[i]; //Here, the sum variable is incremented with the value at index i
}
console.log("Sum of numbers in array: "+sum);