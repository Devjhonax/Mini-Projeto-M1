🎓 Mini Projeto M1 – Gerenciamento de Estudantes (Node.js)

Projeto desenvolvido como parte do Módulo 1 da formação Programadores do Amanhã (PdA).

Este sistema, feito em Node.js, permite gerenciar estudantes via terminal: cadastrar, listar, editar e excluir, além de gerar relatórios com base nas notas.

📋 Funcionalidades

Cadastrar estudantes (nome, idade, notas)

Listar estudantes

Buscar por nome

Calcular médias individuais e da turma

Gerar relatório de desempenho (aprovados, reprovados, recuperação)

Editar dados

Excluir estudantes

🚀 Como Executar

Clone o repositório:

git clone https://github.com/Devjhonax/Mini-Projeto-M1.git

Execute o projeto:

node scripts/index.js

🛠 Tecnologias

Node.js

JavaScript (ES6+)

📂 Estrutura do Projeto
Mini-Projeto-M1/
├── scripts/
|   ├── functions
│   |   ├── cadastro.js
│   |   ├── listagem.js
│   |   ├── calculo.js
|   |   ├── mediaIndi.js
|   |   ├── busca.js
|   ├── node_modules
|   ├── alunos.json
|   ├── index.js 
|   ├── package-lock.json
│   └── package.json    # Ponto de entrada
├── README.md

📚 Aprendizados

Organização de código com módulos JS

Manipulação de arrays e objetos

Criação de funções reutilizáveis

Execução de projetos via terminal

Validação de entradas do usuário

💡 Melhorias Futuras

Armazenar dados em arquivo ou banco de dados

Adicionar testes automatizados

Criar interface gráfica web

Melhorar mensagens de erro e validação

👥 Agradecimentos

Projeto orientado pelos professores Daniel José da Silva Mendes e Júlio César Brito, dentro da iniciativa Programadores do Amanhã.
