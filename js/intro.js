let idade = 25;
let nome = "beatriz";
let idade2 = 23;
let resultado1 = idade + idade2;
//contatenação texto mais texto ou numero
/*
console.log("ola mundo!");
console.info("olá mundo!");
console.error("Erro Mundo!");
console.debug("depuração, mundo!");
*/

//escopo de variaveis 
//chaves abre bloco de código
//fora do escopo é global
var idade3 = 30;
{
    //dentro do escopo é local
    var idade3 = 35;

}
console.log(idade3);