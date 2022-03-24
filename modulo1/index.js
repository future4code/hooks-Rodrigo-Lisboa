



listaDePessoas = [
    {
        nome: "Guilherme Carv"
        anoNascimento: 1991
        nacionalidade: "brasileira"
        vacinouSe: true
    
    },
    
    {
        nome: "Guilherme Ca"
        anoNascimento: 1960
        nacionalidade: "brasileira"
        vacinouSe: false
    
    },
    {
        nome: "Guilherme Carv"
        anoNascimento: 1950
        nacionalidade: "brasileira"
        vacinouSe: true
    }
]
    
function selecionaPessoas(listaDePessoas){
const anoAtual = new Date().getFullYear()  
let resultadoFinal = []
for( let pessoa of listaDePessoas){


    if(
        pessoa.nacionalidade === "Brasileira" &&
        pessoa.anoNascimento >= 60 &&
        pessoa.vacinouSe === false
        ){
        resultadoFinal.push(pessoa)
}
        return(resultadoFinal)
}

console.log(selecaoPessoas(listaDePessoas))