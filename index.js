const caminho = './alunos.json'
const { log } = require("console");
const fs = require("fs")
const conteudo = fs.readFileSync(caminho, 'utf8');
const dadosAlunos = JSON.parse(conteudo)

let alunos = []
let recuperacao = []
let aprovados = []
let reprovados = []
let estudanteExemplar = ''

alunos = JSON.parse(conteudo);

const salvarAlunos = () => {
    fs.writeFileSync("alunos.json", JSON.stringify(alunos, null))
}

const cadastrar = (nome, idade, notas) => {
    alunos.push({ nome, idade, notas })
    salvarAlunos()
}

const exibir = () => {
    for (let i = 0; i < alunos.length; i++) {
        console.log(`${alunos[i].nome}`);
        console.log(`-------------------`);
    }
}

const busca = (nome) => {
    let encontrado = false;

    alunos.forEach((el, i) => {
        if (el.nome == nome) {
            console.log(`Id:${i} / Nome:${el.nome} / Idade:${el.idade} / Notas:${el.notas}`);
            encontrado = true
        };
    });

    if (!encontrado) {
        console.log(`${nome} não foi encontrado na lista de alunos.`);
    };
}

const calculo = () => {
    let maiorMedia = 0

    for (let i = 0; i < alunos.length; i++) {
        let aluno = alunos[i].notas
        let notaTotal = aluno[0] + aluno[1] + aluno[2]
        let media = notaTotal / aluno.length

        if(media >= 7){
            aprovados.push(alunos[i].nome)
        }else if(media >= 5 && media <= 6.9){
            recuperacao.push(alunos[i].nome)
        }else{
            reprovados.push(alunos[i].nome)
        }

        if(media > maiorMedia){
            maiorMedia = media
            estudanteExemplar = alunos[i].nome
        }
    }    
}

const mediaIndividual = (nome) => {
    let encontrado = false;

    alunos.forEach((el, i) => {
        if (el.nome == nome) {
            let aluno = el.notas
            let notaTotal = aluno[0] + aluno[1] + aluno[2]
            let media = notaTotal / aluno.length

            console.log(`media do aluno é ${media}`);
            encontrado = true
        };
    });

    if (!encontrado) {
        console.log(`${nome} não foi encontrado na lista de alunos.`);
    };
}