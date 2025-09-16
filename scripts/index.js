// importações de funções e do readline
import { busca, excluirAluno } from './functions/busca.js'
import * as cadastro from './functions/cadastro.js'
import { exibir, exibirMediaSala, maiorMedia, alunosAprovados, alunosReprovados, alunosRecuperacao } from './functions/listagem.js'
import { mediaIndividual } from './functions/mediaIndi.js'
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// array para cadastrar as notas 
let notas = []

// painel
let menu = () => {
    rl.question(`
        ## GESTÃO DE ALUNOS ##
        1 - Cadastrar estudante
        2 - Buscar estudante
        3 - Listar estudantes
        4 - Media de todos os alunos
        5 - Media individual
        6 - Estudante com maior media
        7 - Estudantes reprovados
        8 - Estudantes em recuperação
        9 - Estudantes aprovados
        10 - Excluir estudante
        11 - Alterar dados do estudante
        Selecione o que deseja fazer ==>`, (opcao) => {
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

                                    cadastro.cadastrar(nome, Number(idade), notas)

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

            case '10':
                rl.question('Nome do aluno que deseja remover: ', (nome) => {
                    excluirAluno(nome)
                    console.log(`Aluno(a) ${nome} removido com sucesso.`)
                    rl.close()
                })
                break

            case '11':
                rl.question('Nome do estudante que deseja alterar: ', (nome) => {
                    const i = cadastro.alunos.findIndex(el => el.nome === nome);

                    if (i === -1) {
                        console.log("Aluno não encontrado.");
                        rl.close();
                        return;
                    }

                    rl.question('Digite o novo nome (ou Enter para manter): ', (novoNome) => {
                        rl.question('Digite a nova idade (ou Enter para manter): ', (novaIdade) => {
                            rl.question('Digite a primeira nota (ou Enter para manter): ', (nota1) => {
                                rl.question('Digite a segunda nota (ou Enter para manter): ', (nota2) => {
                                    rl.question('Digite a terceira nota (ou Enter para manter): ', (nota3) => {

                                        // Atualiza dinamicamente
                                        if (novoNome.trim() !== "")
                                            cadastro.alunos[i].nome = novoNome;

                                        if (novaIdade.trim() !== "")
                                            cadastro.alunos[i].idade = parseInt(novaIdade);

                                        // copia todos os dados de nota do aluno
                                        let notasAtualizadas = [...cadastro.alunos[i].notas];

                                        // Substitui apenas se o usuário digitou algo
                                        if (nota1.trim() !== "") notasAtualizadas[0] = Number(nota1);
                                        if (nota2.trim() !== "") notasAtualizadas[1] = Number(nota2);
                                        if (nota3.trim() !== "") notasAtualizadas[2] = Number(nota3);

                                        // Atualiza o aluno
                                        cadastro.alunos[i].notas = notasAtualizadas;

                                        console.log(`Aluno(a) alterado com sucesso:`, cadastro.alunos[i]);

                                        cadastro.salvarAlunos();

                                        rl.close();
                                    });
                                });
                            });
                        });
                    });
                });
                break;
        }
    })
}

menu()