import * as cadasto from './cadastro.js'
import { calculo, recuperacao, aprovados, reprovados, mediaSala, estudanteExemplar} from './calculo.js'

calculo()

const exibir = () => {
    for (let i = 0; i < cadasto.alunos.length; i++) {
        console.log(`${cadasto.alunos[i].nome}`);
        console.log(`-------------------`);
    }
}

const exibirMediaSala = ()=>{
    for (let i = 0; i < mediaSala.length; i++) {
        const sala = mediaSala[i]
        console.log(`${sala.nome} tem media de ${sala.media}`);  
    }
}

const maiorMedia = ()=>{
    console.log(estudanteExemplar);  
}

const alunosRecuperacao = ()=>{
    console.log(recuperacao);    
}

const alunosAprovados = ()=>{
    console.log(aprovados);    
}

const alunosReprovados = ()=>{
    console.log(reprovados);
}


export { exibir, exibirMediaSala, maiorMedia, alunosAprovados, alunosReprovados, alunosRecuperacao }