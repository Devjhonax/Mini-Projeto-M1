import { busca } from './functions/busca.js'
import * as cadasto from './functions/cadastro.js'
import { exibir, exibirMediaSala, maiorMedia, alunosAprovados, alunosReprovados, alunosRecuperacao } from './functions/listagem.js'
import { mediaIndividual } from './functions/mediaIndi.js'
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let notas = []

let menu = () => {
    rl.question(`
        Seja bem vindo, o que deseja?
        1 - Cadastrar estudante
        2 - Buscar estudante
        3 - Listar estudantes
        4 - Media de todos os alunos
        5 - Media individual
        6 - Estudante com maior media
        7 - Estundantes reprovados
        8 - Estudantes em recuperação
        9 - Estudantes aprovados
        `, (opcao) => {
        switch (opcao) {
            case '1':
                rl.question('Digite o nome: ', (nome) => {
                    rl.question('Digite a idade: ', (idade) => {
                        rl.question('Digite a primeira nota: ', (nota1) => {
                            notas.push(Number(nota1))

                            rl.question('Digite a segunda nota: ', (nota2) => {
                                notas.push(Number(nota2))

                                rl.question('Digite a terceira nota: ', (nota3) => {
                                    notas.push(Number(nota3))

                                    cadasto.cadastrar(nome, idade, notas)

                                    console.log(`Aluno ${nome} cadastrado.`)
                                    rl.close()
                                })
                            })
                        })
                    })
                })
                break

            case '2':
                rl.question('Nome do aluno que deseja buscar: ', (nome) => {
                    busca(nome)
                    rl.close()
                })
                break

            case '3':
                exibir()
                rl.close()
                break

            case '4':
                exibirMediaSala()
                rl.close()
                break

            case '5':
                rl.question('Digite o nome do aluno: ', (nome) => {
                    mediaIndividual(nome)
                    rl.close()
                })
                break

            case '6':
                maiorMedia()
                rl.close()
                break
        
            case '7':
                alunosReprovados()
                rl.close()
                break
        
            case '8':
                alunosRecuperacao()
                rl.close()
                break

            case '9':
                alunosAprovados()
                rl.close()
                break
            }
    })
}

menu()