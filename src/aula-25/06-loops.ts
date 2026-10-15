// Exercício 6: loops + desafio de QA

const nomes = [
  "Combination Pliers",
  "Pliers",
  "Bolt Cutters",
  "Long Nose Pliers",
  "Slip Joint Pliers",
  "Claw Hammer with Shock Reduction Grip",
  "Hammer",
  "Claw Hammer",
  "Thor Hammer",
];

// for
for (let i = 0; i < 3; i++) {
  console.log(`${i + 1}. ${nomes[i]}`);
}
// esperado:
// 1. Combination Pliers / 2. Pliers / 3. Bolt Cutters

// for...of: contar nomes com "Hammer"
let martelos = 0;
for (const nome of nomes) {
  if (nome.includes("Hammer")) {
    martelos++;
  }
}
console.log("Martelos:", martelos); // esperado: 4

// while: percorrer as páginas
const ultimaPagina = 5;
let pagina = 1;
while (pagina <= ultimaPagina) {
  console.log(`Abrindo página ${pagina}`);
  pagina++;
}
// esperado: Abrindo página 1 ... Abrindo página 5

// Desafio de QA
const total = 45;
const porPagina = 9;
const paginasEsperadas = Math.ceil(total / porPagina);
console.log(`Páginas esperadas: ${paginasEsperadas}`); // esperado: Páginas esperadas: 5
console.log(paginasEsperadas === ultimaPagina);        // esperado: true
console.log(nomes.length === porPagina);               // esperado: true (9 produtos na página)