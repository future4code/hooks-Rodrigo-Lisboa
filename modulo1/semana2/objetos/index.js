// - **Exercícios de interpretação de código**************************************************
    
//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
//     1.  Leia o código abaixo.

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}
console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

            // **************************  a) O que vai ser impresso no console?
// console.log(filme.elenco[0]) 
//RESPOSTA: SERÁ IMPRESSO NO CONSOLE O NOME DE "Matheus Nachtergaele" QUE FAZ PARTE DO ELENCO E ESTÁ ALOCADO NO ÍNDICE ZERO DO Array. 

//console.log(filme.elenco[filme.elenco.length - 1]) 
// RESPOSTA: SERÁ IMPRESSO NO CONSOLE O O NOME DE "Virginia Cavendish"

// console.log(filme.transmissoesHoje[2])
//RESPOSTA: SERA IMPRESSO NO CONSOLE O INDICE 2 CORRESPONDENTE AO //{canal: "Globo", horario: "14"};



//2. Leia o código abaixo***********************************************************************
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}
const gato = {...cachorro, nome: "Juba"}
const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// a) O que vai ser impresso no console?

// console.log(cachorro) = "Juca", 3, "SRD". 
// RESPOSTA: SERÁ IMPRESSO O NOME JUCA, IDADE 3 E REÇA SED

// console.log(gato)
// RESPOSTA: SERÁ IMPRESSO NOME: JUBA, IDADE, 3 E REÇA: SRD

// console.log(tartaruga)
// RESPOSTA: SERÁ IMPRESSO NOME: JUBO, IDADE, 3 E REÇA: SRD

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// RESPOSTA:   A SINTAXE DOS TRÊS PONTINHOS ANTES DO NOME DO OBJETO SERVE PARA PUXAR AS INFORMAÇÕES DO OBJETO DESCRITO.



//3. Leia o código abaixo********************************************************************
    
    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
        //AQUI NESSA FUNÇÃO EU NÃO ENTENDI FOI NADA. 
    }
    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }
    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))
    
    
    // // // a) O que vai ser impresso no console?
    // // console.log(minhaFuncao(pessoa, "backender"))
    // // RESPOSTA: IMPRIME QUE CAIO NÃO PE BACKENDER (FALSE);

    // console.log(minhaFuncao(pessoa, "altura"))
    // RESPOSTA: IMPRIME UNDEFINED

    // // b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
    // RESPOSTA: IMPRIME FALSE PORQUE BACKENDER TEM ESSE VALOR ATRIBUIDO
    // RESPOSTA: IMPRIME UNDEFINER PQ O OBJETO ALTURA NÃO É DEFINIDO NO ESCOPO. 




    // Exercícios de escrita de código
    // 1. Resolva os passos a seguir: 
    
    // a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 
    
            const meusApelidos = {
                nome: "Rodrigo",
                apelidos: ["Rô", "Guinho", "Mr Lisboa"] 
            }
        function imprimeApelidos(receber) {
        console.log(`Eu sou ${nome} e meus apelidos são: ${apelidos}.`)
        }
console.log(imprimeApelidos)


//b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

//             const outrosApelidos = {
//                 ...apelidos,
//             novosapelidos = [...apelidos, apelidos = ["Drigo", "Digão", "Rodri"]] 
//             }
// console.log(imprimeApelidos(meusApelidos))