const days = Number(prompt("Digite um número de 1 a 7"))

if (days === 1){
	document.write("O dia correspondente é Domingo")
}
else if (days === 2){
	document.write("O dia correspondente é Segunda")
}
else if(days === 3){
	document.write("O dia correspondente é Terça")
}
else if (days === 4){
	document.write("O dia correspondente é Quarta")
}
else if (days === 5){
	document.write("O dia correspondente é Quinta")
}
else if (days === 6){
	document.write("O dia correspondente é Sexta")
}
else if(days === 7){
	document.write("O dia correspondente é Sábado")
}
else {
	alert("Escreva um número válido")
}
