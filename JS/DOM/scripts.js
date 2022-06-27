//getElementById()
//console.log(document.getElementById('blogt'))

//getElementsByClassName(')
//const element = document.getElementsByClassName('one');
//console.log(element)

//getElementsByTagName('a')
//const element = document.getElementsByTagName('h1')
//console.log(element)

//*MANIPULANDO CONTEÚDO

//textcontent
//const element = document.querySelector('h1')
//element.textContent += ' hello world!'

//innerText
//const element = document.querySelector('h1')
//element.innerText = "olá"

//innetHTML
//const element = document.querySelector('h1')
//element.innerHTML = "olá <small>!</small>"

//value
//const element = document.querySelector('input')
//console.log(element.value)
//element.value= "valor que quiser"

//*MANIPULANDO ELEMENTOS

//atributos
/*
const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(header.getAttribute('id'))

header.removeAttribute('id')
header.setAttribute('id', 'header bg')
*/

//*ALTERANDO ESTILOS
/*
const element = document.querySelector('body')

element.style.backgroundColor = "green"
console.log(element.style.backgroundColor)
*/

//classList
/*
const element = document.querySelector('body')

element.classList.add('active', 'green')

console.log(element.classList)
//element.classList.remove('active')
element.classList.toggle('active')
*/

//*NAVEGANDO PELOS ELEMENTOS
//parentNode parentElment
/*
const body = document.querySelector('body')
console.log(body.parentNode)

const element = document.querySelector('h1')
console.log(h1.parentNode)
*/

//childNodes children
/*
const el = document.querySelector('body')

// firstChild firstElementChild
console.log(el.firstElementChild)
*/

/*  firstChild
    nextSibling
    previousSibling
    leva em consideração espaços vazios.
    
    firstElementChild
    nextElementChild
    previousElementSibling 
    não leva em consideração espaço vazio.
*/

//CRIANDO ELEMENTOS

//createElement
/*
const div = document.createElement('div');
div.innerText = "Olá devs"

//append prepend
const body = document.querySelector('body')
//depois 
body.append(div)
//antes 
body.prepend(div)
*/

//ADICIONANDO ELEMENTOS
/*
const div = document.createElement('div');
div.innerText = "Olá devs"

//insertBefore
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)
*/

//EVENTOS

//mouse
/*
function print() {
    console.log('print')
}

//teclado
const input = document.querySelector('input')

input.onkeydown = function() {
    console.log('rodei')
}
*/

const p = document.querySelector('p')

p.addEventListener('mouseover', print)

function print() {
    console.log('moment')
}

p.addEventListener('click', function print() {
    console.log('print')
})