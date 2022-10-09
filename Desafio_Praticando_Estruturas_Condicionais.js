/**
 * 
 * @param {number} numero1 
 * @param {number} numero2 
 * @param {string} operacao Parâmetro destinado a exercer as operações matemáticas como(soma,subtracao,divisao,multiplicacao)
 * @description Função destinada a exercer os cálculos básicos de uma calculadora
 * @returns 
 */
function calculadora(numero1,numero2,operacao){

    if(operacao === "soma" ){
    return (numero1 + numero2);

    }else if(operacao === "subtracao" ){
        return (numero1 - numero2);
    
    }else if(operacao === "divisao"  ){
            return (numero1 / numero2 );
        
     }else if(operacao === "multiplicacao"  ){
        return (numero1 * numero2 );
     
    }else if(operacao === "raiz"  ){
        
        const x = numero1 * numero2 ;
        return (Math.sqrt(x));
        
     }else {

        return "OPÇÃO INVÁLIDA"
     }

}


console.log(calculadora(3,3,"raiz"));