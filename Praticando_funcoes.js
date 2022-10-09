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
/**
 * 
 * @param {list} x 
 * @description Função que recebe uma lista como parâmetro e retorna um filter
 * aonde só possui nomes que começam com uma determinada letra  que nesse caso é a "P"
 */

function listas(x){

console.log("Os nomes selecionados pelo filter são: " + x.filter(nomes => nomes[0] == "P") );

}

const array_listas = ["Julia","Ana","Pedro","Rafael","Paula"];
listas(array_listas);


/* 4º Desafio
3 - Função e Operadores
A - Crie uma função que receba dois números e retorne a soma dos mesmos.*/

function somatoria(n5,n8){

return (n5 + n8);

}

console.log("A soma dos dois números é : " + somatoria(15,5));

//B - Crie uma função que recebe dois números e retorne a multiplicação entre eles

function multiplicacao(n6,n7){

console.log("A multiplicação dos dois números é : "+ n6*n7);
    
    }
    
 multiplicacao(5,5);

// C - Crie uma função que receba dois números e retorne o média entre eles

function media(n6,n7){

    console.log("A média dos dois números é : " + (n6+n7)/2);
        
        }
        
     media(2,5);   