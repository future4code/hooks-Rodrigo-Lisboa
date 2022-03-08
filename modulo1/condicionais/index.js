// - **Exercícios de interpretação de código******************************************************
    
//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
//     1. Leia o código abaixo:

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
// a) Explique o que o código faz. Qual o teste que ele realiza? 
// RESPOSTA: SERÁ TESTADO SE O NÚMERO É PAR OU IMPAR. 

// b) Para que tipos de números ele imprime no console "Passou no teste"?
// RESPOSTA: PASSARÁ NO TESTE SEMPRE QUE O RESTO DA DIVISÃO FOR ZERO 

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// RESPOSTA: NÃO PASSARÁ NO TESTE SE O NUMERO FOR 
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// a) Para que serve o código acima?
// RESPOSTA: O CODIGO SERVE PARA APRESENTAR AO CLIENTE OS PREÇOS DOS PRODUTOS 

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// RESPOSTA: SERÁ IMPRESSO O ("O preço da fruta ", maçâ, " é ", "R$ ", 2.50)

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// RESPOSTA: SERIA IMPRESSO O PREÇO DA PÊRA, POIS O BREAK SUBSEQUENTE NÃO INFLUIRIA SOBRE O RESULTADO DO ELEMENTO QUE O ANTECEDE. MAS, CASO O USUÁRIO NÃO ESCOLHECE NENHUMA DAS FRUTAS SELECIONADAS E COM O BREAK RETIRADO SERIA IMPRESSO O PREÇO DE DEFAULT. 

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//3. Leia o código abaixo:
    
    // const numero = Number(prompt("Digite o primeiro número."))
    
    // if(numero > 0) {
    //   console.log("Esse número passou no teste")
    // 	let mensagem = "Essa mensagem é secreta!!!"
    // }
    // console.log(mensagem)
    
    // a) O que a primeira linha está fazendo?
    // RESPOSTA: PEDINDO AO USUÁRIO QUE INSIRA UM NUMERO NO PROMPT     
    
    // b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    // RESPOSTA: CASO 10, ("Esse número passou no teste")
    //           CASO -10 NÃO SERÁ IMPRESSO NADA. 
    // c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
    // RESPOSTA: SIM. NUMERO JÁ FOI USADO NA QUESTÃO 1. OUTRO ERRO É QUE MENSAGEM NÃO EXISTE FORA DO BLOCO, ASSIM NÃO SERÁ IMPRESSO NO CONSOLE.PARA SER EXECUTADO O CODIGO DEVERIA ESTAR COM A SEGUINTE ESTRUTURA

    const numero5 = Number(prompt("Digite o primeiro número."))
    
    if(numero5 > 0) {    //numero redefinido para numero5 ou algo que já não tenha cido definido previamente. 
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
        console.log(mensagem)  //console chemando a mensagem para a impressão dentro do bloco, pois não pode ser acessado de fora do bloco. 
    }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Exercícios de escrita de código

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

    const idadeUsuario = Number(prompt("Qual a sua idade?"))
    if(idadeUsuario > 17) {
        console.log("Você pode dirigit")
    }else{ 
        console.log("Você não pode dirigir")    
    }

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
// Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
const turnoDoEstudante = (prompt("Responda M para (matutino), V para (vespertino) ou N para (noturno)"))
if (turnoDoEstudante === "M") {
    console.log("Booom diaa!!!")
} else if (turnoDoEstudante === "V")
{
    console.log("Boooa tardee!!!")
} else if (turnoDoEstudante === "N")
{
    console.log("Boooa Noittee!!!")
}

//Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
const turnoDoEstudante2 = (prompt("Responda M para (matutino), V para (vespertino) ou N para (noturno)"))
switch (turnoDoEstudante2) {
case "M":
    console.log("Booom diaa!!!")
    break; 
  case "V":
    console.log("Boooa tardee!!!")
    break;
  case "N":
    console.log("Boooa Noittee!!!")
    break;
  default:
    console.log("Você digitou a respectiva letra MAIUSCULA?");
    break;
}

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. 
//Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

let generoFilme = (prompt("Qual genero de filme você vai assistir?")) 
let precoIngreço = (Number(prompt("Qual o preço do ingresso?")))
if (generoFilme === "fantasia" && precoIngreço < 15){
console.log("Bom filme")
}
else if (generoFilme !== "fantasia" || precoIngreço > 14)
{console.log("Escolhe outro filme")}
