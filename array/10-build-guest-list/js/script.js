let guests = [];
let countGuests = 1;

guests.push("André");
guests.push("De Arrascaeta");
guests.push("Zico");

for(let i = 0; i< guests.length; i++)
{
    console.log(countGuests+" - "+guests[i]);
    countGuests++;
}