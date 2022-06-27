let subject = 'create video'

function createThink(subject){
    subject = 'study'

// toda função que não tiver o return, o resultado é undefi.
    return subject
}

console.log(createThink(subject))
console.log(subject)

/*
o resultado apresenta informações diferentes pois está sendo declarado o parâmetro na função, se não tivesse o resultado seria igual para os dois consoles.
*/