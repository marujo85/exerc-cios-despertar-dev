let sum2 = []
let sum = 0

for (let i = 1; sum2.length < 4; i++) {
    for (let j = 1; j < i; j++) {
        if (i % j === 0) {
            sum += j
        }
    }
    if (i === sum) {
        sum2.push(i)
    }
    sum = 0
}
document.write(`Os primeiros ${sum2.length} números perfeitos são: ${sum2}`)