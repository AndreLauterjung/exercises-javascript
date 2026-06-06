const avisos = ["Erro 404", "Timeout", "Permissão Negada"];

const verificarTamanhoArray = avisos.length;

if(verificarTamanhoArray === 0)
{
    console.log("Sistema estável!");
}
else
{
    console.log(avisos.join(" | "));
}