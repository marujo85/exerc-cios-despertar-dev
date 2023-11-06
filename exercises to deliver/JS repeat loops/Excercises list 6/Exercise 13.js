let storedNumber = Number(prompt('Digite um número inteiro maior que 1'))

let contador = 0

for (let i = 1; i <= storedNumber ; i++) {
	if (i %2 != 0) {
		document.write(` ${i}`)
		contador++ 
	}
} document.write(`<br> Foram impressos ${contador} números impares.`)