// questão 04
var popA = 80000
var popB = 200000

var taxaA = 3
var taxaB = 1.5

var ano = 0

while (popA <= popB) {
    popA *= (1 + taxaA/100)
    popB *= (1 + taxaB/100)
    ++ano

    console.log(`Populacão A ${popA.toFixed(1)} e populacão B ${popB.toFixed(1)} no ano: ${ano}`)
}