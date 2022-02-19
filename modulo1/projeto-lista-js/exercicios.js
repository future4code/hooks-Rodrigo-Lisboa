// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) 
{
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() 
{
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() 
{
  // implemente sua lógica aqui
  const alturaRetangulo = Number(prompt('Qual a altura do reangulo?'))
  const  larguraRetangulo = Number(prompt('Qual a largura do reangulo?'))
  const areaDoRetangulo = alturaRetangulo * larguraRetangulo
  console.log(areaDoRetangulo);
}


// EXERCÍCIO 02
function imprimeIdade() 
{
  // implemente sua lógica aqui
  const  anoAtual = Number(prompt("Digite o ano atual, por favor?"))
  const anoNascimento = Number(prompt("Em que ano você nasceu?"))
  const idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) 
{
  // implemente sua lógica aqui
  const  peso = Number(prompt("Digite o ano atual, por favor?"))
  const altura = Number(prompt("Em que ano você nasceu?"))
  return peso / (altura * altura)
}


// EXERCÍCIO 04
  function imprimeInformacoesUsuario(){
  const nome = prompt("Digite seu nome")
  const idade = prompt("Digite sua idade")
  const email = prompt("Digite seu e-mail")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}



// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite uma cor favorita!")
  const cor2 = prompt("Digite outra cor que voc~e gosta!")
  const cor3 = prompt("Digite só mais uma cor que te agrada!")
  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
   const string = "oaiAiaoaiaoiaoaA"
   return string.toUpperCase()
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const custo = 3000
const valorIngresso = 100
return 3000 / 100
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
string1 = 1058
string2 = 1058
return string1 === string2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}