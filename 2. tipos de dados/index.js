//Tipos de variáveis
var nome = 'Lucas'; //string = texto
var idade = 20; //number = número
var possuiFaculdade = false; //boolean = verdadeiro e falso
var time; //undefinied = variável vazia
var comida = null; //null = nulo
var symbol = Symbol(); //symbol = único na memória
var objeto = {}; //object = funções, arrays, etc...

//Exemplo 1
var comida = 'Massa';
//Verifica o tipo da variável com o método "typeof", neste caso, retorna string
console.log(typeof nome);

//Exemplo 2
//Concatenar strings(juntar)
var nome2 = 'Abel';
var sobrenome2 = 'Tesfaye';
//"+" é o operador que concatena as strings
var nomeCompleto2 = nome2 + ' ' + sobrenome2;
//Para adicionar espaço, pode ser efeito como na linha acima, concatenando um espaço ao texto, ou, adicionando um espaço em uma variavel. Ex: var nome = "Pedro "; <-(notem o espaço antes de fechar as aspas)
console.log(nomeCompleto2);
//Também é possivel concatenar números as strings
var pulos = 30;
var frase = 'Bruno deu ' + pulos + ' saltos no pula-corda'
console.log(frase);
//Mesmo concatenando números com strings, o resultado será uma string, se verificar usando typeof, o retorno será string, Ex:
var ano = '2022';
var mes = 5;
console.log(ano + mes);
//se forem dois números, eles são somados
var ano2 = 2022;
var mes2 = 6;
console.log(ano2 + mes2);

//Exemplo 3
//aspas dentro de string
/*
'Js é "super" facil'
"Js é 'super' facil"
"Js é \"super\" facil"
'Js é "super" facil"'
"Js é "super" facil" -> inválido
*/

//Exemplo 4
//Template String - usando acento "ao contrário" é possivel passar uma expressão dentro da string (a expressão deve estar dentro de "${}"). Ex:
var frase2 = `Brenno deu ${pulos} saltos no pula-corda`;
console.log(frase2);
//dentro do ${}, é possivel usar operadores matemáticos, algo impossivel dentro de strings
var frase3 = `Brenno deu ${pulos * 2} saltos no pula-corda`;
console.log(frase3);




//Exercício

//Declarar uma variável contendo uma string
var texto = 'Um texto qualquer';
//Declarar uma variável contendo um número dentro de uma string
var numeroEmString = '250';
//Declarar uma variável com sua idade
var minhaIdade = 20;
//Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some os mesmos
var meuNome = 'Lucas',
    meuSobrenome = 'Ribeiro Nunes';
var meuNomeCompleto = `${meuNome} ${meuSobrenome}`;
//Coloque a seguinte frase em uma variável: It's time
var variavelItsTime = "It's time";
//Verifique o tipo da variável que contem o seu nome
console.log(typeof meuNome);
//ou, mais bonito
console.log("a variável que contem meu nome é do tipo: " + typeof meuNome);