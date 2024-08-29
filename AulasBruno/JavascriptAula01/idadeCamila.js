import prompt from "prompt-sync";
const ler = prompt();

console.log('Primeira idade: ');
let idade1 = Number(ler());

console.log('Segunda idade: ');
let idade2 = Number(ler());

console.log('Terceira idade: ');
let idade3 = Number(ler());

let idadeCamila = 0;

if(idade1 > idade2 && idade1 < idade3 || idade1 < idade2 && idade1 > idade3 ){
    idadeCamila = idade1;
}

if(idade2 > idade1 && idade2 < idade3 || idade2 < idade1 && idade2 > idade3 ){
    idadeCamila = idade2;
}

if(idade3 > idade2 && idade3 < idade1 || idade3 < idade2 && idade3 > idade1 ){
    idadeCamila = idade3;
}

console.log(`A idade de Camila é ${idadeCamila}`);