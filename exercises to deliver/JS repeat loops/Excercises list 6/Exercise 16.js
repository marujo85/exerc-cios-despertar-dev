let currentYear = Number(prompt("Digite o ano atual"))
let birthYear = Number(prompt("Digite o ano do seu nascimento"))
 

if (currentYear - birthYear < 16){
	document.write(`Você não poderá votar este ano`)
} else {
	document.write(`Você poderá votar este ano`)
}