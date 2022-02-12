                                                                
                                             
                                             


                                                                //Exercícios de interpretação de código




// 1 Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
/* O codigo acima vai imprimir as variaveis do tipo namber no console. 
10 
5
*/


//-----------------------------------------------------------------------------------------------------------------------------------


// 2 Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
/* Dessa vez o codigo acima vai imprimir no console as variáveis do tipo strings (a, b, c)
*/


//--------------------------------------------------------------------------------------------------------------------------------------


// 3 Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. 
//Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes 
//não podem começar com números ou caracteres especiais.
let horasPorDia = prompt("Quantas horas você trabalha por dia?")
let remuneraçaoPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horasPorDia/emuneraçaoPorDia} por hora`)

/*
/*let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
*/

//Alterei os nomes das variaveis usando camelCase


//--------------------------------------------------------














                                                            //Exercícios de escrita de código



/*
1. Construa um programa, seguindo os seguintes passos:
    
    a) Declare uma variável para armazenar um nome, sem atribuir um valor.
    
    b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
    
    c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
    
    d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
    
    e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
*/

let nome = 
let idade = 
console.log(typeof nome, typeof idade, typeof estudante); 
// Foi impresso underfined pois nada foi atribuido à variavel. 

//-----------------------------------------------------------------------------------------------------------------------------


//      a) Declare uma variável para armazenar um nome, sem atribuir um valor.
let nome = "Rodrigo"
//      b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
let idade = 26 
//      c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
console.log(typeof nome, typeof idade);

//      d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
/* Foi impresso underfiled 
porque não há nenhum valor atribuido*/

//      e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
let seuNome = prompt("Qual o seu nome?");
let suaIdade = prompt("Qual a sua idade?");
//g) Para finalizar, imprima na tela a mensagem:"Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu.
console.log("Olá", seuNome,"você tem", suaIdade, "anos");


//-----------------------------------------------------------------------------------------------------------------------------------

/*2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: 
"Você está usando uma roupa azul hoje?". 
Depois, siga os passos:
*/
    //a) Crie três novas variáveis, contendo as respostas
    //b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:


    let posição = prompt("você está estudando programação na Labenu?");
    let corDaRoupa = prompt("Sua camisa é azul?");

    console.log     ("você está estudando programação na Labenu?", posição);
    console.log     ("Sua camisa é azul?", corDaRoupa);

    let a = 10
    let b = 25
    let c 
    c = a //c = 10
    a = b //a = 25
    b = c
    console.log(a, b);




