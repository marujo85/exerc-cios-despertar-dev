const driverAge = Number(prompt("Digite a idade do motorista"))
const license = confirm ("Tem CNH ou não?")

if (driverAge >= 18 && license === true){
	document.write(`Pode dirigir`)
} else {
	document.write(`Não pode dirigir`)
}