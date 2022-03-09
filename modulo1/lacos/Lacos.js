


// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    
    
    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)

// Aplica-se a seguinte condição:
// A partir do valor inicial "0", zero, representado pela "let i = 0", executa-se a condição de loop enquanto o numero da let "valor" for inferior a "cinco", acrescentando um numero de cada vez até que seja atingida a condição de um valor não inferior a "5". Dessa forma será impresso no console o "valor = 5". 


////////////////////////////////////////////////////////////////////////////////////////////////////



//  2. Leia o código abaixo:
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

// a) O que vai ser impresso no console?
// Será impresso os números maiores que 18 da const lista

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// Sim, Usando colchetes com o número referente ao indice pretendido. 



//////////////////////////////////////////////////


// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
    // A partir do valor inicial zero, "let asterisco" será executada enquanto o valor de asterisco for inferior à "quantidadeAtual" acrescido de "1". No caso se for digitado 456789 o cara se dá mal com o loob finito mas que trava o computador com tanto asterisco. Mas se coloca 4 vai imprimir 4 linhas com até 4 asteriscos em cada. 
    
    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
      }
      console.log(linha)
      quantidadeAtual++
    }


    //Exercícios de escrita de código



// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
let quantidadeMelhorAmigoBichinho = Number(prompt("Quantos amiguinhos animais você tem?"));
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

if(quantidadeMelhorAmigoBichinho === 0){
  console.log("Que pena! Deseja fazer uma adoção responsável de um pet?");

} 
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
else if(quantidadeMelhorAmigoBichinho > 0) {
  let nomesBichinhos = prompt("Quais os nomes?");
  let nomesBichinhosLista = [nomesBichinhos]
  console.log(nomesBichinhosLista)
  
}
// Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
// c) Por fim, imprima o array com os nomes dos bichinhos no console.