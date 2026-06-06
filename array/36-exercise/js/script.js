let alunos = ["Marcos", "Aline", "Vitor"];
let matriculados = [];

let dadoAluno = "";

let mensagemSistema = "";

function efetuarMatricula()
{
    dadoAluno = alunos.shift();

    matriculados.push(dadoAluno);

    mensagemSistema = "O aluno foi matriculado! ";

    console.log(mensagemSistema + dadoAluno);
}

efetuarMatricula();
console.log(matriculados);

efetuarMatricula();
console.log(matriculados);

efetuarMatricula();
console.log(matriculados);