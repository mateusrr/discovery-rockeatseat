// function expression
// function anonymous
// sum - somar
// parametros
const sum = function(number1, number2){
// sempre usar palavra-chave na função
    let total = number1 + number2
//quando não tem return na função, o resultado é undefined
    return total
}

let number1 = 34
let number2 = 25
sum(2,3) // arguments

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)

// ainda está interpolando os valores
console.log(`a soma é ${sum(number1, number2)}`)

// outra maneira de function
function fazerSuco(fruta1, fruta2){
    return 'suco de ' + fruta1 + fruta2
}

const copo = fazerSuco('banana com ', 'maçã')
console.log(copo)

