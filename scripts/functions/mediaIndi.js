import * as cadasto from './cadastro.js'

const mediaIndividual = (nome) => {
    let encontrado = false;

    cadasto.alunos.forEach((el, i) => {
        if (el.nome == nome) {
            let aluno = cadasto.alunos[i].notas
            let media = (aluno[0] + aluno[1] + aluno[2]) / aluno.length
            let nomeAluno = cadasto.alunos[i].nome

            console.log(`media do aluno ${nomeAluno} é ${media}`);
            encontrado = true
        };
    });

    if (!encontrado) {
        console.log(`${nome} não foi encontrado na lista de alunos.`);
    };
}

export { mediaIndividual }