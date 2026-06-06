let num1 = 0;
let num2 = 1;
let temp = 0;
let contagem = 0;


for (contagem; contagem<=30; contagem++)
{
    temp = num1+num2;

    num1 = num2;
    num2 = temp;

    console.log(temp);
}
