//2. indexOf() - "Onde está?"
// Procura a primeira posição do elemento. Retorna o índice (0, 1, 2...) ou -1 se não encontrar.

console.log("==== indexOf() ====");

// exemplo 1 - Lista de frutas
const frutas2 = ["banana", "maçã", "laranja"];
//indices: 0 -> maça, 1-> banana, 2-> laranja
console.log("Posição da banana:", frutas.indexOf("banana")); // 1

//Exemplo 2 - Procurando aluno
const alunos = ["Ana", "João", "Carlos", "Mariana"];
console.log("Posição da Maria:", alunos.indexOf("Maria")); // 3

// Exemplo 3 - quando não existe (retorna -1)
console.log("Posição de Pedro:", alunos.indexOf("Pedro")); // -1

// Exemplo 4 - usando if
const posicao = alunos.indexOf("Joãoo");

if (posicao !== -1) {
    console.log("Aluno encontrado na posição:", posicao);
}   else {
    console.log("Aluno não encontrado!");
}
