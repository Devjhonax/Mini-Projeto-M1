const caminho = './alunos.json'
const fs = require("fs")
const conteudo = fs.readFileSync(caminho, 'utf8');
const dadosAlunos = JSON.parse(conteudo)

let alunos = []

alunos = JSON.parse(conteudo);

const salvarAlunos= ()=> {
    fs.writeFileSync("alunos.json", JSON.stringify(alunos,null))
}

const cadastrar = (nome, idade, notas)=>{
    alunos.push({nome, idade, notas})
    salvarAlunos()
}

const exibir = ()=>{
    for (let i = 0; i < dadosAlunos.length; i++) {
        console.log(`${dadosAlunos[i].nome}`);
        console.log(`-------------------`);
    }
}

const busca = (nome)=>{
    let encontrado = false;

    dadosAlunos.forEach((el, i)=>{
        if(el.nome == nome){
            console.log(`Id:${i} / Nome:${el.nome} / Idade:${el.idade} / Notas:${el.notas}`);
            encontrado = true
        };
    });
    
    if(!encontrado){
            console.log(`${nome} não foi encontrado na lista de alunos.`);
        };
}

