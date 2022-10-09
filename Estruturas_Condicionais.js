//Estruturas Condicionais

// Exemplo de IF/ELSE
var senha = 123;
var usuario = "admin"

 if(senha ===  123 &&  usuario === "admin") {

console.log("Seja bem  vindo")

}else {

    console.log("Senha incorreta")
}


// Mais um exemplo

console.log("==========================");
console.log("Segundo Exemplo (Saque) ");

const valor_total = 1000;
const divida = 500;
const saque = 300;
const bloqueada = false;

if(saque + divida >= valor_total || bloqueada ){

    console.log("Saque recusado")

}else {

    console.log("Seja bem  vindo o valor que você está retirando é : " + saque)
}
console.log("==========================");
// Exemplo de estrutura alinhada
// OBSERVAÇÃO : CUIDADO AO USAR O MÓDULO DE ERRO DESSE EXEMPLO, POIS ELE ACABA COM O PROCESSO DO SEU SISTEMA.
// UMA FORMA DE BOA UTILIZAÇÃO SERIA EM UM ATENDIMENTO AONDE A PESSOA DIGITOU UMA OPÇÃO ERRADA E DEVIDO A ISSO
// O ATENDIMENTO PODE SER ENCERRADO
console.log("Exemplo de estrutura alinhada");

const  opcao = 3;

if(opcao === 1){
    console.log("Escolheu a opção 1");

}else if(opcao === 2){
    console.log("Escolheu a opção 2");

}else if(opcao === 3){
    console.log("Escolheu a opção 3");

}else{

    throw new Error("Operação inválida"); // módulo de erro do JavaScript

}


// Exemplo de Switch case
console.log("==========================");
console.log("Exemplo de Switch case");

const username = "coordenador";


switch(username){
case "admin":
        console.log("Bem vindo administrador")
      break;
case "coordenador":
        console.log("Bem vindo coordenador")
      break;
default:
        console.log("Bem vindo")
    
}

// Exemplo de Operador ternário
console.log("==========================");
console.log("Exemplo de Operador ternário");

const idade = 10;

idade > 18 ? console.log("Bem vindo") : console.log("Precisa de autorização"); // Uma forma de se fazer
console.log(idade > 18 ? "Seja bem vindo" : "Precisa de autorização dos pais"); // Essa segunda forma é bem melhor


// Exemplo de Diminuindo o IF/Else
console.log("==========================");
console.log("Exemplo de Diminuindo o IF/Else");

function validaIdade(idade){
if (idade >= 18) return "Bem Vindo"
return "Opção Inválida"

}
console.log(validaIdade(17));