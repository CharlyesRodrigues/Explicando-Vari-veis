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
 * Como o próprio nome diz, se trata do cálculo de uma raiz quadrada
 * @param {number} x 
 * @returns 
 */
    function raizquadrada(x){

const raiz = Math.sqrt(x);
return raiz;

    }
    
    console.log(raizquadrada(hipotenusas(3,4)));