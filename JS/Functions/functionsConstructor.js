/*
    - expressão new
    - criar um novo obj
    - this keyword
*/

function Person(name) {
    this.name = name
}
const Mateus = new Person("Mateus")
console.log(Mateus)

const Maria = new Person("Maria")
console.log(Maria)