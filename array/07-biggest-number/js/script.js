const numbers = [1,23,21, 47, 7, 17, 422, 912, 47];

biggestNumber = numbers[0];

for (let i = 0; i< numbers.length;i++)
{
    if(numbers[i]>biggestNumber)
    {
        biggestNumber=numbers[i];
    }
}
console.log("The biggest number in array is: "+biggestNumber);