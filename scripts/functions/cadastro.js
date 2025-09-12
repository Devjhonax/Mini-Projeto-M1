// impotação da biblioteca para manipular o JSON
import fs from 'fs'
import path from 'path'

const caminho = path.resolve('alunos.json')

// verifica se existe o arquivo json
if (!fs.existsSync(caminho)) {
  fs.writeFileSync(caminho, '[]', 'utf8')
}

// referencia o arquivo
let alunos = JSON.parse(fs.readFileSync(caminho, 'utf8'))

// função para salvar o aluno no arquivo JSON
const salvarAlunos = () => {
    fs.writeFileSync(caminho, JSON.stringify(alunos, null, 2), 'utf8')
}

// função para cadastrar alunos
const cadastrar = (nome, idade, notas) => {
  if(nome !== "" && idade !== "" && notas !== ""){
    alunos.push({ nome, idade, notas })
    console.log(`Aluno(a) ${nome} cadastrado.`)
  }else{
    console.log('A campos importantes não preenchidos!');
    console.log('Aluno não cadastrado, preencha todos os campos.');
  }
    salvarAlunos()
}

export {alunos, cadastrar, salvarAlunos}