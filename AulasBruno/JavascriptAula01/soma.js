import prompt from "prompt-sync";
const ler = prompt();

console.log('Informe um numero: ');
let num1 = Number(ler());

console.log('Informe outro numero: ');
let num2 = Number(ler());

let soma = num1 + num2;

console.log(`${num1} + ${num2} = ${soma}`)