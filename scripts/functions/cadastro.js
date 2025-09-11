import fs from 'fs'
import path from 'path'

const caminho = path.resolve('alunos.json')

if (!fs.existsSync(caminho)) {
  fs.writeFileSync(caminho, '[]', 'utf8')
}

let alunos = JSON.parse(fs.readFileSync(caminho, 'utf8'))

const salvarAlunos = () => {
    fs.writeFileSync(caminho, JSON.stringify(alunos, null, 2), 'utf8')
}

const cadastrar = (nome, idade, notas) => {
    alunos.push({ nome, idade, notas })
    salvarAlunos()
}

export {alunos, cadastrar, salvarAlunos}