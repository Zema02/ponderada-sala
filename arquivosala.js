let nota1 = 7.0;
let nota2 = 8.5;
let nota3 = 6.0;

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7.0) {
  console.log(`Média: ${media.toFixed(2)} - APROVADO`);
} else {
  console.log(`Média: ${media.toFixed(2)} - REPROVADO`);
}

let notas = [nota1, nota2, nota3];

let maiorNota = notas[0];
let menorNota = notas[0];

for (let i = 1; i < notas.length; i++) {
  if (notas[i] > maiorNota) {
    maiorNota = notas[i];
  }
  if (notas[i] < menorNota) {
    menorNota = notas[i];
  }
}

console.log(`Maior Nota: ${maiorNota}`);
console.log(`Menor Nota: ${menorNota}`);