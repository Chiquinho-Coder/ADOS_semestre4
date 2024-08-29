import prompt from "prompt-sync";
const ler = prompt();

console.log('Numero de alunos: ')
let alunos = Number(ler());

console.log('Litros por vez: ')
let litros = Number(ler());

console.log('Quantos Ml os caba toma?: ')
let mls = Number(ler());

let consumo = (alunos*mls)/1000;

let litrosTotal = litros;

while (consumo > litrosTotal){
    litrosTotal += litros;
}

console.log(`Vai precisar de ${litrosTotal}L de café pra esses cara ai!`);