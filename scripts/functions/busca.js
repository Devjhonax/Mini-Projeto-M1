// importação das funções de cadastro e biblioteca para acessar o JSON
import fs from 'fs'
import path from 'path'
import * as cadastro from './cadastro.js'

// caminho do arquivo JSON
const caminho = path.resolve('alunos.json')

// função de busca  
const busca = (nome) => {
    let encontrado = false;

    cadastro.alunos.forEach((el, i) => {
        if (el.nome == nome) {
            console.log(`Id:${i} / Nome:${el.nome} / Idade:${el.idade} / Notas:${el.notas}`);
            encontrado = true
        };
    });

    if (!encontrado) {
        console.log(`${nome} não foi encontrado na lista de alunos.`);
    };
}

// função de excluir aluno
const excluirAluno = (nome) => {
    const i = cadastro.alunos.findIndex(el => el.nome === nome)

    if(i !== -1){
        cadastro.alunos.splice(i, 1)
        fs.writeFileSync(caminho, JSON.stringify(cadastro.alunos, null, 2), 'utf8')
    }
}

export { busca, excluirAluno }