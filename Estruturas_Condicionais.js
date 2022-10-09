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
console.log("Exemplo de estrutura alinhada");

const  opcao = 3;

if(opcao === 1){
    console.log("Escolheu a opção 1");

}else if(opcao === 2){
    console.log("Escolheu a opção 2");

}else if(opcao === 3){
    console.log("Escolheu a opção 3");

}else{

   throw new Error("Operação inválida");

}