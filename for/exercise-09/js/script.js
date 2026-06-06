let voidString = "";

for (let i = 1; i<=5; i++)
{
    voidString += i;

    if(i<5)
    {
        voidString += " - ";
    }
}
console.log(voidString);