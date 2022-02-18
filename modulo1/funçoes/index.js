///////////////////- **Exercícios de interpretação de código**
    
    // Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
//1. Leia o código abaixo
        
        
    //   ```  function minhaFuncao(variavel) {
    //     	return variavel * 5
    //     }
        
    //     console.log(minhaFuncao(2))
    //     console.log(minhaFuncao(10))
    //     ```
    // //    // a) O que vai ser impresso no console?
             //Vai ser impressa a variável(2) multiplicada por 5 = 10
             //Vai ser impressa a variavel (10) multiplicada por 5 = 50
        
    //     b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
            //Nada aconteceria no console. 



//2. Leia o código abaixo:
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//a. Explique o que essa função faz e qual é sua utilidade
// A função imprime a resposta em texto do usuário com letras minúsculas e retornar true se houver a palavra "cenoura" ou false se não houver. 

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
    //  i.   `Eu gosto de cenoura`
    //  //saida1 eu "eu gosto de cenoura"
    //  //saida2 "true"
    //  ii.  `CENOURA é bom pra vista`
    //  //saida1 "cenoura é bom pra vista"
    //  //saida2 "true"
    //  iii. `Cenouras crescem na terra`
    //  //saida1 "cenouras crescem na terra"
    //  //saida2 "false"



//- **Exercícios de escrita de código**
    //1. Escreva as funções explicadas abaixo:
        
      //  a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
        // ``` "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante." ```
       // Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
const nome = "rodrigo"
const idade = "26"
const cidade = "cal"
const profissao = "professor"
function imprimaMinhasInformaçoes()
{ 
console.log(`Eu sou ${nome} tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
}
imprimaMinhasInformaçoes()


// 2. Escreva as funções explicadas abaixo:
// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
function somar(num1, num2)
{
    const resultado = num1 + num2
    console.log(resultado)
    return resultado
}
somar(10, 10)

                                                    
// b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
function somandoMaioOuIgual(num3, num4)
{
    const resultado = num3 >= num4
    console.log(resultado)
    return resultado
}
somandoMaioOuIgual(10, 110)  


// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function numeroPar(number1)
{
    const restoDaDivisao = number1 % 2
    console.log("O número é par?", restoDaDivisao === 0)
}
numeroPar(13 + 13 * 35 - 1)      


// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
let texto = "Mensagem string"
function mensagemString(texto)
{
console.log(texto.length)
console.log(texto.toUpperCase())
}
mensagemString(texto)


//3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
function operaçaoSoma()
{
   const numeroUm = Number(prompt ("Coloque um numero:"))
   const numeroDois = Number(prompt ("Coloque outro numero:"))
console.log(numeroUm + numeroDois)
}
operaçaoSoma()



function operaçaoSubtrair()
{
   const numeroUm = Number(prompt ("Coloque um numero:"))
   const numeroDois = Number(prompt ("Coloque outro numero:"))
console.log(numeroUm - numeroDois)
}
operaçaoSubtrair()



function operaçaoMultiplicar()
{
   const numeroUm = Number(prompt ("Coloque um numero:"))
   const numeroDois = Number(prompt ("Coloque outro numero:"))
console.log(numeroUm * numeroDois)
}
operaçaoMultiplicar()



function operaçaoDividir()
{
   const numeroUm = Number(prompt ("Coloque um numero:"))
   const numeroDois = Number(prompt ("Coloque outro numero:"))
console.log(numeroUm / numeroDois)
}
operaçaoDividir()