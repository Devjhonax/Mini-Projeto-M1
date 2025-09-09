let alunos = [
    {"nome":"jho", "idade": 18, "nota": [9,10,6]},
    {"nome":"arthur", "idade": 17, "nota": [5,10,10]},
    {"nome":"janaina", "idade": 27, "nota": [4,5,2]},
    {"nome":"marcos", "idade": 16, "nota": [8,9,6]}
]

const cadastro = (nome, idade, notas)=>{
    alunos.push({nome, idade, notas})
}

const exibir = ()=>{
    for (let i = 0; i < alunos.length; i++) {
        console.log(`${alunos[i].nome}`);
        console.log(`-------------------`);
    }
}

const busca = (nome)=>{
    let encontrado = false;

    alunos.forEach((el, i)=>{
        if(el.nome == nome){
            console.log(`Id:${i} / Nome:${el.nome} / Idade:${el.idade} / Notas:${el.nota}`);
            encontrado = true
        };
    });
    
    if(!encontrado){
            console.log(`${nome} não foi encontrado na lista de alunos.`);
        };
}

busca("maria")


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }