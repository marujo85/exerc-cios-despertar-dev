
let readNumber = Number(prompt('Digite um número inteiro'))
let product = 0

while (product < 500) {
	readNumber = readNumber * 3
	product = readNumber
	break
}
document.write(`O último valor é: ${product}`)