// 5. join() - Transformando array em texto
// une todos os elementos do array em uma única string usando um separador.

console.log("==== 5. join() ====");

// exemplo 1 - separador padrão (vírgula)
const nomes = ["Ana", "João", "Carlos"];
console.log("Com separador padrão:", nomes.join()); // "Ana,João,Carlos"

// Exemplo 2 - escolhendo separador personalizado
console.log("Com hifen :", nomes.join(" - ")); // "Ana - João - Carlos"

// Exemplo 3 - lista de tecnologias
const tecnologias = ["HTML", "CSS", "JavaScript", "React"];
const texto = tecnologias.join(" | ");
console.log("Tecnologia formatadas:", texto); // "HTML | CSS | JavaScript | React"

// 💡 Dica: O array guarda os dados. o join() ajuda a transformar esses dados em apresentação textual
