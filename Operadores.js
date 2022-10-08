//                                     Desafio | Operadores
//                                              Aritméticos
// A - Faça uma potência que retorne o número 9;

let  a = 3 ;
let b = 2 ;
console.log("Exemplo de potência");
console.log("A potência de 3 é :" + a ** b);
// Resultado no terminal é 9

//B - Crie uma variável que inicie com o valor 1, e faça ela chegar até o número 7 usando o operador incremento;

console.log("Exemplo de incremento ++");
var inicio = 1;
console.log(inicio++);
console.log(inicio++);
console.log(inicio++);
console.log(inicio++);
console.log(inicio++);
console.log(inicio++);
console.log(inicio++); 
// Resultado será = 1,2,3,4,5,6,7 . 

//                                                Atribuição
//A - Crie uma variável que comece com o valor 10 e que receba uma soma (+=), onde o resultado deve ser maior do que 20;

console.log("Exemplo de atribuição com incremento +=");
var valor_inicio = 10;

 valor_inicio += 11;

console.log(valor_inicio);

//                                                  Comparação
// A - Compare uma string com o valor “1” a um número com o valor 1,o resultado deve retornar false;

console.log("Exemplo de comparação de string com number ");
let letra = "1";
let number = 1;
console.log("Errado : " + (letra == number)); // Ao colocar dois == o terminal mostra que as duas informações é string(true) e isso esta errado

console.log("Certo : " +( letra === 1));// Ao colocar 3 iguais o problema é solucionado
//                                                   Lógicos
// A - Use o operador OR (ou) para retornar true*/

console.log("Exemplo de operador lógico OR ");
let falso = false;
let verdadeiro = true;

console.log(falso || verdadeiro); // Nesse exemplo de OR, basta que uma opção seja verdadeira para dar true
console.log(falso || falso); // Nesse exemplo de OR o resultado foi falso, pois nenhuma opção supri a condição.
