let iniciar = confirm("Deseja realizar um saque?")

while (iniciar){

	const saque = parseInt(prompt("Insira o valor do saque"))

		if (!Number.isInteger(saque) || saque <= 0 ){
			alert("Número inserido inválido!")
			continue
		}

	let resto

	let nota50 = parseInt(saque/50)
	resto = saque % 50

	let notas10 = parseInt(resto/10)
	resto = resto % 10

	let notas5 = parseInt(resto/5)
	resto = resto % 5

	let notas1 = resto



document.write(`Resultado do saque de R$${saque} </br>`)
document.write (`GC$ 50,00 -> ${nota50} </br>
GC$ 10,00 -> ${notas10} </br>
GC$ 5,00 -> ${notas5} </br>
GC$ 1,00 ->  ${notas1} </br>`)

iniciar = confirm(`Deseja realizar mais um saque?`)

}
