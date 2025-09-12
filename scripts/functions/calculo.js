// importa as funções do arquivo de cadastro
import * as cadastro from './cadastro.js'

// lista de arrays para salvar as condições dos estudantes
let recuperacao = []
let aprovados = []
let reprovados = []
let mediaSala = []
let estudanteExemplar = ''

// função de calculo
const calculo = () => {
    let maiorMedia = 0

    recuperacao = []
    aprovados = []
    reprovados = []
    mediaSala = []

    for (let i = 0; i < cadastro.alunos.length; i++) {
        let aluno = cadastro.alunos[i].notas
        let media = (aluno[0] + aluno[1] + aluno[2]) / aluno.length
        let nomeAluno = cadastro.alunos[i].nome
        mediaSala.push({ 'nome': nomeAluno, 'media': media.toFixed(1) })

        if (media >= 7) {
            aprovados.push(nomeAluno)
        } else if (media >= 5 && media <= 6.9) {
            recuperacao.push(nomeAluno)
        } else {
            reprovados.push(nomeAluno)
        }

        if (media > maiorMedia) {
            maiorMedia = media.toFixed(1)
            estudanteExemplar = nomeAluno
        }
    }
}

export { calculo, recuperacao, aprovados, reprovados, mediaSala, estudanteExemplar }