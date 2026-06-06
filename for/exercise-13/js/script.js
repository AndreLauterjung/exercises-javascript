for (let i = 2; i<=20; i++)
{
    console.log("Primeiro for"+i)
    for(let div = 2; div<i; div++)
    {
        if(i == 2 && div == 2)
        {
            console.log("É o número 2! O número 2 é primo!");
        }

        if(i % 2 == 1 && i / i == 1)
        {
            console.log("este número é primo!");
        }
    }
}