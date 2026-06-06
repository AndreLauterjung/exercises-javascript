let historicoLogs = [];
let data = "";


function gerarLog(mensagem)
{
    data = new Date().toLocaleDateString();

   /*No caso do new Date().toLocaleDateString():

    O "Array" (Objeto): O new Date() cria um objeto cheio de informações (como um array de dados do tempo).

    O Método: O .toLocaleDateString() entra nesse "balde" de informações, 
    seleciona o que é importante e te entrega formatado como string. */ 

    historicoLogs.push(mensagem + data);

    console.log(historicoLogs);
}

gerarLog("Fiz login - ");