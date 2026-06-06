const titulo = ["como", "usar", "o", "metodo", "join", "em", "javascript"];

let url = "";

url = titulo.join("-");

if(url.length > 20)
{
    console.log("URL MUITO LONGA!");
}
else{
    console.log(url);
}