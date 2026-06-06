let h = 22;
let m = 39;
let s = 8;

let timer = [];

if(h < 10)
{
    h = "0"+h;
    //aqui ele já vai para string 
}
else
{
    h = h.toString();
    //aqui, como é só o número, precisamos converter para string
}

if(m < 10)
{
    m = "0"+m;
    //aqui ele já vai para string 
}
else
{
    m = m.toString();
    //aqui, como é só o número, precisamos converter para string
}

if(s < 10)
{
    s = "0"+s;
    //aqui ele já vai para string 
}
else
{
    s = s.toString();
    //aqui, como é só o número, precisamos converter para string
}

timer.push(h);
timer.push(m);
timer.push(s);

console.log(timer.join(":"));