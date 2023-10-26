/*let gCelsius = Number(prompt("Digite o valor em graus Celsius"));

let  calc1 = gCelsius * 9 + 160;
let fharenheit = calc1 / 5;

document.write(`A temperatura em graus fharenheit é:  ${fharenheit} <br>`)



let diaSemana = Number(prompt("Digite um número de 1 a 7"))
let nomeDia

switch (diaSemana) {
	case 1:
		nomeDia = "Domingo"
		break;
	case 2:
		nomeDia = "Segunda"
		break
	case 3:
		nomeDia = "Terça"
		break
	case 4:
		nomeDia = "Quarta"
		break
	case 5:
		nomeDia = "Quinta"
		break
	case 6:
		nomeDia = "Sexta"
		break
	case 7:
		nomeDia = "Sábado"
		break
	default:
		document.write("Digite um número válido")
		break;
} if (diaSemana >=1 && diaSemana <=7) {
	document.write(`O dia correspondente ao número:  ${diaSemana} é o dia ${nomeDia} </br>`);
}

const numInput = Number(prompt("Insira um número"))

if (numInput > 0){
	document.write(`Este número é positivo </br>`)
} else if (numInput <0){
	document.write (`Este número é negativo </br>`)
} else {
	document.write(`O número digitado é zero </br>`)
}


const fabCost = Number(prompt("Insira o valor de fábrica do carro"))

let costDist = fabCost/100* 28
let costTax = fabCost/100 * 45

const totalCost = fabCost + costDist + costTax

document.write(`O valor total do carro ${totalCost.toFixed(2)} </br>`)*/

/*const height= Number(prompt("Insira a sua altura em metros").replace(",", ".") )
const weight = Number(prompt("Insira o seu peso em kg").replace(",", "."))

const imc= weight/(height*height)

if (imc <18.5){
	document.write(`Você apresenta um estado de desnutrição </br>`)
} else if (imc >=18.5 && imc <25){
	document.write(`Você apresenta um estado de eutrofia </br>`)
} else {
	document.write(`Você apresenta um estado de sobrepeso </br>`)
}*/



/*let num1 = Number(prompt("Insira um número"))
let num2 = Number(prompt("Insira um número"))

let operator = prompt("Escolha a operação")
let result = 0

if (operator == "+"){
	result = num1 + num2
	document.write(`O resultado da operação entre os dois números é: ${result}`)
} else if (operator == "-") {
	result = num1 - num2
	document.write(`O resultado da operação entre os dois números é: ${result}`)
} else if (operator == "*") {
	result = num1 * num2
	document.write(`O resultado da operação entre os dois números é: ${result}`)
} else if (operator == "/") {
	result = (num1 / num2).toFixed(2)
	document.write(`O resultado da operação entre os dois números é: ${result}`)
} else {
	document.write (`Digite um operador válido (+, -, * ou /)`)
}
*/


/*let balance = 1000
let withdraw = Number(prompt("Digite o valor de saque"))
let result = ((balance - withdraw) - 4.5).toFixed(2)

if (withdraw >0 && withdraw %5 == 0){
	if (withdraw + 4.5 < balance){
		document.write (`Saque efetuado com sucesso. Seu saldo atual é ${result} </br>`)}
	else {
		document.write (`Saldo insuficiente`)	
		}
	}
	else {
	document.write(`Digite um valor positivo e múltiplo de 5</br>`)
}*/

const age = Number(prompt("Digite a idade do Atleta"))
const heightAthlete = Number(prompt("Digite o peso do Atleta"))

if (age < 12) {
	document.write(`Categoria Infantil`)
} else if (age > 13 && age <= 16){
	if (heightAthlete <= 40){
		document.write(`Categoria Juvenil leve</br>`)
	} else {
		document.write (`Categoria Juvenil pesado</br>`)
	}
} else if (age >= 17 && age <= 24){
	if (heightAthlete < 45){
		document.write(`Categoria Sênior leve</br>`)
	} else if (heightAthlete >= 45 && heightAthlete < 60){
		document.write(`Categoria Sênior médio</br>`)
	} else {
		document.write(`Categoria Sênior pesado</br>`)
	}
} else if (age > 24){
	document.write(`Categoria veterano </br>`)
}

/*const carVel = Number(prompt("Digite a velocidade do carro"))
	const trafficTick = (carVel - 80) * 5

	if (carVel >80){
		document.write(`Você foi multado. O valor da multa é R$${trafficTick} </br>`)
	}*/

