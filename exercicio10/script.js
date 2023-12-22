var a = 38
var b = 34

if (a > b) {
    do {
        b++
        console.log(`${b}`)
    } while (b < a)
} else if (a < b) {
    do {
        a++
        console.log(`${a}`)
    } while (a < b)
}