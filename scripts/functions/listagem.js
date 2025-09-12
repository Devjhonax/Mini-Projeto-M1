// importações de funções do arquivo da cadastro e de calculo
import * as cadastro from './cadastro.js'
import { calculo, recuperacao, aprovados, reprovados, mediaSala, estudanteExemplar} from './calculo.js'

calculo()

// função para exibir todos os alunos cadastrados
const exibir = () => {
    for (let i = 0; i < cadastro.alunos.length; i++) {
        console.log(`${cadastro.alunos[i].nome}`);
        console.log(`-------------------`);
    }
}

// função que exibi as medias dos alunos da sala
const exibirMediaSala = ()=>{
    for (let i = 0; i < mediaSala.length; i++) {
        const sala = mediaSala[i]
        console.log(`${sala.nome} tem media de ${sala.media}`);  
    }
}

// função que exibi o aluno com a maior media da sala
const maiorMedia = ()=>{
    console.log(estudanteExemplar);  
}

// função que exibi os alunos em recuperação
const alunosRecuperacao = ()=>{
    recuperacao.forEach((el) => console.log(el)) 
}

// função que exibi os alunos aprovados
const alunosAprovados = ()=>{
    aprovados.forEach((el)=>console.log(el));   
}

// função que exibi os alunos reprovados
const alunosReprovados = ()=>{
    reprovados.forEach((el)=>console.log(el));
}


export { exibir, exibirMediaSala, maiorMedia, alunosAprovados, alunosReprovados, alunosRecuperacao }