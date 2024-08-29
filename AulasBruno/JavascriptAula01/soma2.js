import prompt from "prompt-sync";
const ler = prompt();

let num1 = Number(prompt("Primeiro numero"));
let num2 = Number(prompt("Segundo numero"));

let soma = num1 + num2;

console.log(`${num1} + ${num2} = ${soma}`)