/*
// Funções Comuns
//================

/**
 * Faz a soma de números inteiros
 * @param {number} n 
 * @param {number} n1 
 * @returns 
 */
function soma (n,n1){

return(n +n1);

}
// A função de soma é chamada e retorna a soma,mas para mostrar na tela é preciso utilizaar o comando console.log
console.log (soma(8,2));

/**
 * Faz a soma de números inteiros sem retorno
 * @param {number} n 
 * @param {number} n1 
 */
function somas (n2,n3){

    console.log (n2 + n3);
        
    }
    
// A função é chamada e como ele já possui o comando para imprimir o resultado na tela, não preciso utilizar o comando
// console.log basta somente passar os valores referentes aos parâmetros criados.
    somas(1,5)


                     // Agora vamos para um exemplo bem claro da utilização do return

                     console.log("Hipotenusa sem retorn Error");

function hipotenusa( catetoaAdj, catetoOposto){

const calcCatetos = catetoaAdj ** 2 + catetoOposto ** 2; 
// há um calculo nessa linha atribuido ao calcCatetos,mas o retorno desse calculo não é feito e no 
//terminal aparece o erro de undefined
                                              

}

console.log(hipotenusa(3,4));
                   // Agora vamos para um exemplo utilizando return

console.log("Hipotenusa com o retorn CERTO");

function hipotenusas( catetoaAdj , catetoOposto){

    const calcCatetos = catetoaAdj ** 2 +  catetoOposto ** 2 ;
    return calcCatetos; // percebê-se que o calculo acima é passado para o comando return que por sua fez 
   // disponibiliza  o resultado da função ao ser chamada.
    }

/**
 * 
 * @param {number} x  forneça um numero para você saber sua raiz quadrada
 * @description Como o próprio nome diz, se trata  de uma raiz quadrada
 * @returns {number}calculo da raiz quadrada 
 * */
    

function raizquadrada(x){

const raiz = Math.sqrt(x);
return raiz;

    }
    console.log("Criei uma função de raiz quadrada do resultado da hipotenusa") ;
    console.log(raizquadrada(hipotenusas(3,4)));
    console.log(raizquadrada(9));
 

// Funções Assíncronas 
// Retornam apenas 3 métodos( then,catch,finally)
//=================================================

async function assincrona() {

    const resposta = await fetch("https://api.github.com/users/CharlyesRodrigues")


return resposta
}
// then => se tiver tudo Ok retorna uma resposta positiva
// cath => se der algo errado, esse método retorna umm mensagem de erro.

assincrona().then(ok =>{
console.log("Deu tudo certo" )

}).catch(error => console.log("Algo deu errado " ))

// Funções Arrow
//================
// É menos verbosa e prática de se fazer e já possui um retorno automatico
//OBSERVAÇÃO : se tentarmos executar  a função sem atribui-la a uma variável, vai dar erro

const fn = () => console.log("Olá arrow function"); // nessa linha estou atribuindo minha função a variável fn
fn()// ao atribuir a função a variável fn percebê-se que há a possíbilidade de executá-la e com isso
// mostrar o que ela possui
/**
 * Método de soma(Arrow Function)
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
const arrowsoma = (a,b)=> a+b; // função Arrow " (a,b)=> a+b;" atribuida a uma variável "const arrowsoma"

console.log(arrowsoma(5,8));

// Funções Callbacks
//==================
//OBSERVAÇÃO : a função login recebe um parâmetro "Callback" que é uma função que têm no seu escopo a mensagem
// a seguir Callback("Olá meu primeiro exemplo de callback");

/**
 * Recebe  uma função como parâmetro
 * @param {function} Callback 
 */

function login (Callback){

Callback("Olá meu primeiro exemplo de callback");

}

login((msg) =>{console.log(msg)}) // nessa linha eu passei minha  callback que é uma arrow function  "msg =>{console.log(msg)"

