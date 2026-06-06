const seqNum = [10, 20, 30, 50, 388]; //Array with aleatory Numbers.

function firstLast () //function
{
    return seqNum[0]+" "+(seqNum[seqNum.length - 1]);
    //seqNum[0] return the first value in array

    //seqNum[seqNum.length -1] return the last value in array.
}

console.log(firstLast()); //Run with Node.js