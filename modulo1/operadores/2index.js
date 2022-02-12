

                                                    //Exercícios de interpretação de código

//1 Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
const bool1 = true
const bool2 = false
const bool3 = !bool2  
let resultado = bool1 && bool2 //TRUE && FALSE = FALSE
console.log("a. ", resultado)
//"O RESULTADO DO PROGRAMA ACIMA É FALSE POIS AXISTE UMA VARIÁVEL FALSE DENTRE bool1 E bool2"

resultado = bool1 && bool2 && bool3 // TRUE FALSE FALSE
console.log("b. ", resultado) 
// SERÁ IMPRESSO NO CONSOLE O RESULTADO FOLSE POIS EXISTE PELO MENOS UM RESULTADO FALSE DENTRE bool1, bool2 e boll3     


resultado = !resultado && (bool1 || bool2)  //  Com o || se imprime false somente se todos os booleados forem false. 
console.log("c. ", resultado)
// O console será true pois existe um resultdo true entre os booleans envolvidos. seria false se todos os resultados fossem false apenas. 

console.log("d. ", typeof resultado)
// typeof irá imprimir o tipo de variável (resultado é uma variável do tipo Booleano, pois imprime apenas true ou folse)



// 2 Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
                                                            //O comando abaixo irá imprimir os valores inseridos no prompt duas vezes em vez de somar. 
                                                            let primeiroNumero = prompt("Digite um numero!")
                                                            let segundoNumero = prompt("Digite outro numero!")
                                                            const soma = primeiroNumero + segundoNumero
                                                            console.log(soma)

// 3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

                                                            // É necessário converter de String para Number os valores inseridos no prompt usando "Number(prompt(mensagem))""
  let primeiroNumero = Number(prompt("Digite um numero!"))
  let segundoNumero = Number(prompt("Digite outro numero!"))
  const soma = (primeiroNumero + segundoNumero)
  console.log(soma)



                                                    

                                                                            //Exercícios de escrita de código


//1. Faça um programa que:
    
   // a) Pergunte a idade do usuário
   let suaIdade = prompt("Sua idade?")

   // b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    let idadeDoAmigoOuAmiga = prompt("QUal a idade do seu melhor amigo ou da sua melhor amiga?")

   // c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    console.log("Sua idade é maior do que a do seu melhor amigo?", suaIdade > idadeDoAmigoOuAmiga )
    
   // d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
    console.log(suaIdade - idadeDoAmigoOuAmiga) 

// 2. Faça um programa que:
    
    //     a) Peça ao usuário que insira um número **par**
    let numPar = prompt("Insira um número par")
   //     b) Imprima na console **o resto da divisão** desse número por 2.
    const restoDaDivisao = numPar % 2
    console.log(restoDaDivisao)    
   //     c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
   //O resultado sempre será ZERO pq os numeros são pares. 
   //     d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código:
   //O resto da divisão vai ser sempre 1 quando for dividio um numero impar por 2. 
                            let NumImpar = prompt("Escreva um numero impar")
                            const restoDaDivisao2 = NumImpar % 2
                            console.log(restoDaDivisao2)  

    // 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
let idade = prompt("Qual a sua idade em anos?")
console.log(idade)
//     a) A idade do usuário em meses
   let idadeEmMeses = (idade * 12)
   console.log(idadeEmMeses)
//     b) A idade do usuário em dias
    let idadeEmDias = (idade * 365)
    console.log(idadeEmDias)
//     c) A idade do usuário em horas
     let idadeEmHoras = (idadeEmDias * 8.760)
     console.log(idadeEmHoras)        
    

     // 4 Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
let primeiroNum = Number(prompt("Digite um numero!"))
let segundoNum = Number(prompt("Digite outro numero!"))
console.log(primeiroNum, segundoNum)
console.log("O primeiro numero é maior que segundo?", primeiroNum > segundoNum)
console.log("O primeiro numero é igual ao segundo?", primeiroNum === segundoNum)
console.log("O primeiro numero é divisível pelo segundo?", primeiroNum % segundoNum ===0)
console.log("O segundo numero é divisível pelo primeiro?", segundoNum % primeiroNum ===0)

