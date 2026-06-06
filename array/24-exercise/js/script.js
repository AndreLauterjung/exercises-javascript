let livros = ["livro1", "livro2", "livro3", "livro4", "livro5"];

let livroRemovido; 
while(livros.length != 0)
{
    livroRemovido = livros.pop();
    console.log(livroRemovido, " - removido!");
}