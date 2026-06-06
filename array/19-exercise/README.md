O Formatador de CSV (Valores Separados por Vírgula)
Imagine que você tem os dados de um usuário e precisa transformar isso em uma linha de uma planilha (CSV).

    Dados:
    JavaScript

    let nome = "João Silva";
    let idade = 25;
    let cidade = "Rio de Janeiro";
    let profissão = "Desenvolvedor";

    O que fazer:

        Crie um array chamado linhaPlanilha.

        Adicione todos esses dados ao array.

        Use um if para verificar se a cidade é "Rio de Janeiro". Se for, adicione ao final do array a string "Carioca".

        No final, use o .join() para gerar uma única string onde os dados são separados por um ponto e vírgula (;).

        Exiba o resultado final.