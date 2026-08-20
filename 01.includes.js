// 1. includes() - "Tem esse item?
// Responde a pergunta; "Existe?" (retorna true ou false)

console.log("==== includes() ====");

// exemplo 1 - Lista de frutas
const frutas = ["banana", "maçã", "laranja"];

console.log("Tem banana?", frutas.includes("banana")); // true (porque banana está no array)
console.log("Tem uva?", frutas.includes("uva")); // false (porque uva não está no array)

// Exempl 2 -  usando if/else
    if (frutas.includes("banana")) {
        console.log("Tem banana!");
    } else {
        console.log("Não tem banana!");
}

//Exemplo 3 - lista de alunos
const alunos = ["Ana", "João", "Carlos"];
const nome = "João";

if (alunos.includes(nome)) {
    console.log("Aluno encontrado!");
} else {
    console.log("Aluno não encontrado!");
}


