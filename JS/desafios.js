/* Nota escolar
function getScore(score){
    let A = score >= 90
    let B = score >= 80
    let C = score >= 70
    let D = score >= 60
    let F = score <= 60

    let scoreFinal;

if(A) {
    scoreFinal = "A"
} else if (B) {
    scoreFinal = "B"
} else if (score < 0) {
    console.log('invalida')
}
    return scoreFinal;
}

console.log(getScore(85))
*/

// Sistema de gastos familiar
/*
let family = {
        receitas: [3000, 2500, 432.43],
        despesas: [300, 250, 70.45, 1200]
    }
    
    function sum(array) {
        let total = 0;
        for(let value of array){
            total += value
        }

        return total
    }

    function calculateBalance() {
        const calculateReceitas = sum(family.receitas)
        const calculateDespesas = sum(family.despesas)

        const total = calculateReceitas - calculateDespesas

        const itsOk = total >= 0

        let balanceText = "negativo"

        if (itsOk) {
            balanceText = "positivo"
        }

        console.log(`saldo: ${balanceText}, total: ${total.toFixed(2)}`)
    }


    calculateBalance()
*/

// celsius em fahrenheit


//buscando e contando dados em array

    const booksByCategory = [
        {
            category: "Riqueza",
            books: [
                {
                    title: "Os segredos da mente",
                    author: "Harv",
                },
                {
                    title: "O mais rico",
                    author: "George",
                },
                {
                    title: "Pai",
                    author: "Robert",
                },
            ],
        },
        {

            category: "Inteligência",
            books: [
                {
                    title: "Insubst",
                    author: "Cury",
                },
                {
                    title: "Ansiedade",
                    author: "Cury",
                },
                {
                    title: "7 hábitos",
                    author: "Covey",
                },
            ],
        },
    ]

    const totalCategories = booksByCategory.length

    console.log(totalCategories)
    for(let category of booksByCategory) {
        console.log('total', category.category)
        console.log(category.books.length);
    }