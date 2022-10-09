// 1 - Função e variáveis
 //A- Crie uma função que leia 2 variáveis do tipo number fora de seu escopo e que retorne a soma das mesmas.

 // 1º Desafio
 function somas(n,n2){

console.log(n + n2 );
 }

 somas(5,1);

 //2 - Função e Tipos de Dados

 //A - Crie uma função que receba uma string como parâmetro e retorne o mesmo parâmetro mas do tipo numérico.

// 2º Desafio


function letras (x){

const convert = "x";
console.log("Tipo :" + typeof convert )
console.log("Convertido para : " + typeof parseInt(convert) );

}

letras(2);


// 3º desafio
/*
B - Crie uma função que receba a seguinte lista como parâmetro:
1 [“Júlia”, “Anna”, “Pedro”, “Rafael”, “Paula”]
Essa função deve retornar a mesma lista porém com um filter que só
retorne os nomes que começam com a letra “P” */


const nomes_lista = (array_lista = ["Julia","Ana","Pedro","Rafael","Paula"]) => array_lista.filter(nomes => nomes[0] == "P") ;


console.log(nomes_lista);
