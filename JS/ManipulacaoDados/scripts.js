/*
    Prototype
    - prototype-base language
    - prototype chain
    - __proto__
*/

/* 
    Type conversion vs Type coersion
    explicito o tipo de um dado para o outro
    js fazendo a troca


//type coersion
console.log('9' + 5)

//type conversion
console.log(Number('9') + 5)
*/

/*
    Transformar Strings e números

    let string = "123"
    console.log(Number(string))
    let number = 321
    console.log(String(number))
    */

/* Qntd caractere palavra e dígitos em n.
    let word = "paralelo"
    console.log(word.length)
    let number = 1234
    console.log(String(number).length)
*/

/* transformar número quebrado com 2 casas decimais e trocar ponto por vírgula

    let number = 345.342344
    console.log(number.toFixed(2).replace(".", ","))
*/

/* transformar minusculo em maiusculo

    let word = "Programar é bão."
    console.log(word.toLocaleLowerCase().toUpperCase())
*/

/* verificar se tem uma palavra no texto

    let phrase = "Eu quero viver"
    console.log(phrase.includes("Viver"))
    console.log(phrase.includes("viver"))
*/

/* array com construtor


let MyArray = new Array('a', 'b', 'c')
console.log(MyArray)
*/

/*  contar elementos do array

    console.log([
        "a",
        {type: "array"},
        function() {return "alo"}
    ].length)
*/

/* manipular arrays
 */
    let techs = ["html", "css", "js"]

// adicionar um item no fim
    //techs.push("nodejs")
// adicionar no começo
    //techs.unshift("sql")
// remover do fim
    //techs.pop("node js")
// remover do começo
    //techs.shift()
// pegar somente alguns elementos
    //console.log(techs.slice(1, 3))
// remover 1 ou mais itens em pos. dife.
    //techs.splice(2, 3)
// encontrar posição de um elemento
    let index = techs.indexOf('js')
    techs.splice(index, 1)
    console.log(techs)
