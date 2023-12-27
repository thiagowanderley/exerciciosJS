//Questão 13

var base = 2
var expoente = 3
var resultado = base

for(pot = 1; pot <= expoente; pot++) {
    var resultado = base**pot
    console.log(`Com base ${base} e expoente ${expoente}, temos o resultado:${resultado}`)
}