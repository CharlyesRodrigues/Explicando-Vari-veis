                                        //1. Desafio | String
//(a) - Crie uma variável do tipo string que a posição 1 contenha a letra “a”;

const  posicao = "Carla"; 
console.log("1º Desafio mostrando a posição 1  e a letra solicitada: " + posicao[1]);

                                         //2. Desafio | Number

// (a) crie um string que possa ser transforma em um número inteiro e use o método parseInt para converter para number;

const string_number = "1";           
console.log("2º Desafio. Comando que mostra o tipo de dados.Nesse caso é :" + typeof string_number); // nessa linha o terminal vai mostrar o tipo string

console.log("2º Desafio. que nesse caso converte uma string em number: " + parseInt(string_number) ); //Nessa outra o parseInt Converte string para number


// console.log(typeof parseInt(string_number));          // Nessa outra além de Converter string   para number,é impresso no terminal tipo. 

                                            // 3. Desafio Array
/* (a) Crie uma lista de frutas e coloque o nome de quantas frutas quiser, depois use um dos métodos ensinados na aula para mostrar
no console a lista, seja o método filter para filtrar frutas  específicas, método find, para buscar uma fruta ou o método map;*/


 const array_frutas =["Abacaxi" , "Pera","Maça", "Morango"," Uva"];

console.log("3º Desafio. Mostrando a lista criada :  " + array_frutas);   //    mostra toda a lista no console.
 
 console.log ("Comando Filter que faz a busca de campos que comecem com a letra M : " + array_frutas.filter(frutas => frutas[0] == "M"));// esse comando imprimiu no console as Frutas que começam com M

console.log ("Comando FINDER encontra o primeiro campo da lista que começa com a letra M : " + array_frutas.find(frutas => frutas[0] == "M")); //o comando find encontrou a primeira fruta  que começasse com M

 console.log ("Comando MAP em conjunto com o .toUpperCase() permite mudar letras minúsculas para maiúsculas " + array_frutas.map(frutas => frutas.toUpperCase())); // O comando map possibilita em cojunto com o toUpperCase() deixar todas as letra do array em maiúsculas


 /* 4. Desafio Object
(a) crie um objeto chamado Carro que contenha chaves como: placa, ano e cor; */

const carro = {placa: 'DCE8089 ', ano: 2012 , cor: "Branco"};

// console.log(carro);
