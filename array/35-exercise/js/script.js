let arquivos = [{
        nome: "livroMatematica",
        tipo: ".txt"  
    },

    {
        nome: "livroHistoria",
        tipo: ".pdf"
    },

    {
        nome: "livroFisica",
        tipo: ".docx"
    }
]

let dadoRemovido = "";
let mensagem = "";

function imprimir()
{
    mensagem = "O seguinte dado foi removido: ";
    dadoRemovido = arquivos.shift();

    console.log(mensagem + dadoRemovido.nome + dadoRemovido.tipo);
}

imprimir();
imprimir();
imprimir();

console.log(arquivos);