//               Explicações sobre as variáveis (VAR - LET - CONST)

var nome = "Charlyes"; // var é usado para declaração  global

let meio = " Souza "; // let é utilizado mais na forma local
const sobre = "Rodrigues "; // já a constante não pode ser alterado, Veja exemplo abaixo
console.log (nome + meio + sobre); // no terminal aparece Charlyes Souza Rodrigues

meio =" lindo "; // acima o "MEIO" teve a atribuição de SOUZA
nome = ' Arlindo'// acima o "NOME" teve a atribuição de CHARLYES
//sobre = ' carlos'; tentei atribuir o nome de "CARLOS" para o sobre nome, mas deu erro,pois acima o "Sobre" é declarado como const
console.log (nome + meio + sobre); // Ao executar esse comando aparece no terminal Arlindo lindo Rodrigues