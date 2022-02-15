                      //Exercícios de interpretação de código
//Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

//1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

let array
console.log('a. ', array)
//var let sem atribuição de valor algum, UNDEFINED.

array = null
console.log('b. ', array)
//Vai imprimir o valor null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) 
//Vai imprimir a quanridade de valores da array, 11. 

let i = 0
console.log('d. ', array[i])
// O indice 0 corresponde ao número 3 que será impresso no console. 

array[i+1] = 19
console.log('e. ', array)
// foi modificado o indice 1 com valor 4 que passa a ser 19. Dessa forma o array que será impreso terá 19 no lugar de 4. 

const valor = array[i+6]
console.log('f. ', valor)
// "i" correspode a 3 somado a 6 dá 9. 9 será impresso no console. 

// 2. Leia o código abaixo com atenção 
    
    // ```jsx  const frase = prompt("Digite uma frase")
    
    // console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
    // ```
    
    //Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`
    //  SUBI NUM ÔNIBUS EM MIRROCOS

   // ---------------------------------------------------------------------

                              // **Exercícios de escrita de código**
   // 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
      //  O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
    const email = prompt("Digite seu e-mail");
    const username = prompt("Digite seu nome");
    console.log("O e-mail", email, "foi cadastrado com sucesso. Seja bem-vind@", username);


   // 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

   array.comidasPreferidas = ["pastel", "arroz", "carne", "macarrão", "coxinha"];

    // a) Imprima no console o array completo
    console.log(array.comidasPreferidas)
    
    // b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    console.log("Essas são as minhas comidas preferidas: ", array.comidasPreferidas); 
    
    // c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista. 
    
    const comidaPreferida = prompt("Qual a sua comida preferida?");
    const fraseReplaceAll = (["pastel", comidaPreferida, "carne", "macarrão", "coxinha"]);
    console.log(fraseReplaceAll); 