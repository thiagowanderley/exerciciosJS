//questão 30

var p = 0.18
var x = 1
var z = x
var prod = ''

if (z > 1) {
    var prod = 'pães'
} else {
    var prod = 'pão'

    do {
        var y = x * p
        x++
        console.log(`${z++} ${prod} Custa R$${y.toFixed(2)}`)
    } while (x <= 50)
}


 