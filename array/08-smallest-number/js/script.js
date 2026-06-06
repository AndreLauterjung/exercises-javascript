const numbers = [1, 23, 21, 47, 7, 17, 422, 912, 47];

let smallestNumber = numbers[0];

for (let i = 0; i<numbers.length; i++)
{
    if(smallestNumber>numbers[i])
    {
        smallestNumber = numbers[i];
    }
}
console.log(smallestNumber);