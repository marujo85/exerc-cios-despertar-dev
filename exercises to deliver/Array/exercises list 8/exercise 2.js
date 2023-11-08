let elements1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let sum = 0

for (let element of elements1){
	sum = sum + element
}

document.write(`A soma de todos os elementos do array elements1 é: ${sum}`)