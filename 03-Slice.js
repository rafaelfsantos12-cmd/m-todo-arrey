//3. slice() - "Quero só uma parte
// sintaxe: array.slice(ínicio, fim) O índice final não entra.
// importante: slice() cria uma cópia/novo array, não altera o original.

console.log("==== 3. slice() ====");

// exemplo 1 - produtos
const produtos = [
    "Mouse",  //0
    "Teclado",//1
    "Monitor",//2
    "Headset" //3
];

const produtosselecionados = produtos.slice(1, 4);
console.log("Produtos selecionados (1 a 3):", produtosselecionados); //["Teclado", "Monitor"]

// Exemplo 2 - primeiros elementos
const numeros = [10, 20, 30, 40, 50];
constprimeirosTres = numero.slice(0, 3); //[30, 40, 50]

// Exemplo 4 - mostrando que não altera o array original
const frutas = ["Maça", "Banana", "Laranja", "Uva"];
const novasFrutas = frutas.slice(1, 3); // ["Banana", "Laranja"]
console.log("Array original (intacto):", frutas);
console.log("Novo Array fatiado:", novasFrutas);
