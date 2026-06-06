let a = 10;
let b = 20;

const seqNum = [a, b]; //array

function compare (seqNum) //funcion
{
    if(seqNum[0] > seqNum[1])
    {
        return "A > B";
    }
    else if(seqNum[0]<seqNum[1])
    {
        return "A < B";
    }
    else
    {
        return "A = B";
    }
}

console.log(compare(seqNum));