import * as cadastro from './cadastro.js'

// fução que exibi a media individual do aluno buscado
const mediaIndividual = (nome) => {
    let encontrado = false;

    cadastro.alunos.forEach((el, i) => {
        if (el.nome == nome) {
            let aluno = cadastro.alunos[i].notas
            let media = (aluno[0] + aluno[1] + aluno[2]) / aluno.length
            let nomeAluno = cadastro.alunos[i].nome

            console.log(`media do aluno ${nomeAluno} é ${media.toFixed(1)}`);
            encontrado = true
        };
    });

    if (!encontrado) {
        console.log(`${nome} não foi encontrado na lista de alunos.`);
    };
}

export { mediaIndividual }