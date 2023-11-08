let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13, 14, 15]

for(element of elements){
	if (element %2 === 0){
	document.write(element)
}
}


// ex 2

let elements1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let sum = 0

for (let element of elements1){
	sum = sum + element
}

document.write(`A soma de todos os elementos do array elements1 é: ${sum}`)

let sum2 = []
let sum1 = 0

for (let i = 1; sum2.length < 4; i++) {
    for (let j = 1; j < i; j++) {
        if (i % j === 0) {
            sum1 += j
        }
    }
    if (i === sum1) {
        sum2.push(i)
    }
    sum1 = 0
}
document.write(`Exercício 3: Os primeiros ${sum2.length} números perfeitos são: ${sum2}`)

// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let requestNumber = Number(prompt("Insira seu número"))
// let founded = false

// for(let number of numbers){
// 	if (number === requestNumber){
// 		founded = true
// 		break
// 	}
// }

// if(founded){
// 	document.write("Você acertou. O seu número está na lista")
// } else {
// 	document.write("Errou. O número inserido não faz parte da lista")
// }

// let names = []

// while (names.length < 5 ) {
// 	names.push(prompt("Digite 5 nomes, por favor"))
// }
// document.write(`Esta é a lista de nomes:${names}`)
// document.write('</br>')
// document.write(`Esta é a lista inversa de nomes: ${names.reverse()}`)