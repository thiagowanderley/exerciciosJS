// Questão 11

var a = 39
var b = 34
var soma = 0

if (a > b) {
    do {
        b++
        soma += b
        console.log(`${soma}`)
    } while (b < a)
} else if (a < b) {
    do {
        a++
        soma += a
        console.log(`${soma}`)
    } while (a < b)
}