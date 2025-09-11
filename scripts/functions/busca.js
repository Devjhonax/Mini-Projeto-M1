import * as cadasto from './cadastro.js'

const busca = (nome) => {
    let encontrado = false;

   cadasto.alunos.forEach((el, i) => {
        if (el.nome == nome) {
            console.log(`Id:${i} / Nome:${el.nome} / Idade:${el.idade} / Notas:${el.notas}`);
            encontrado = true
        };
    });

    if (!encontrado) {
        console.log(`${nome} não foi encontrado na lista de alunos.`);
    };
}

export {busca}