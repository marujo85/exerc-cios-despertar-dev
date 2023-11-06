/*exercício 1 e 2*/

const driverAge = Number(prompt("Digite a idade do motorista"))
const license = confirm ("Tem CNH ou não?")

if (driverAge >= 18 && license === true){
	document.write(`Pode dirigir`)
} else {
	document.write(`Não pode dirigir`)
}

/*EXERCÍCIO 3*/
const days1 = Number(prompt("Digite um número de 1 a 7"))

if (days1 === 1){
	document.write("O dia correspondente é Domingo")
}
else if (days1 === 2){
	document.write("O dia correspondente é Segunda")
}
else if(days1 === 3){
	document.write("O dia correspondente é Terça")
}
else if (days1 === 4){
	document.write("O dia correspondente é Quarta")
}
else if (days1 === 5){
	document.write("O dia correspondente é Quinta")
}
else if (days1 === 6){
	document.write("O dia correspondente é Sexta")
}
else if(days1 === 7){
	document.write("O dia correspondente é Sábado")
}
else {
	document.write ("Escreva um número válido")
}

/*EXERCÍCIO 4*/
let days = Number(prompt("Digite um número de 1 a 7"))

switch (days) {
	case 1:
	document.write("O dia correspondente é Domingo");
		break;
	case 2:
        document.write(`O dia correspondente é segunda`)
    break;
    case 3:
        document.write(`O dia correspondente é terça`)
    break;
    case 4:
        document.write(`O dia correspondente é quarta`)
    break;
    case 5:
        document.write(`O dia correspondente é quinta`)
	break
	case 6:
        document.write(`O dia correspondente é sexta`)
	break;

	case 7:
        document.write(`O dia correspondente é sábado`)
	break;

	default:
		document.write (`Escreva um número válido`)
		break;
}

/*EXERCÍCIO 5*/
for (let i = 1; i <= 10; i++){
	if (i %2 == 0){
		document.write(` ${i}`)
	}
}

/*EXERCÍCIO 6*/
let counter = 0

 for (let c = 0; c <= 60; c++){
	if (c %2 != 0){
		document.write(` ${c}`)
		counter++
	}
}
document.write (`</br>Contador: ${counter}`)

/*EXERCÍCIO 7*/
let counter1 =  30
let suma = 0

do {
	suma = suma + counter1
	counter++
} while (counter1 >=10 && counter1<= 100)

document.write(`${suma}`)


/*EXERCÍCIO 8*/
let salarioUsuario = Number(prompt('Digite o seu salário'))

    if(salarioUsuario < 1903.98) {
        document.write(`Isento de Imposto de Renda`)
    } else {
        document.write(`Tributado no Imposto de Renda`)
    }

/*EXERCÍCIO 9*/

let num = Number(prompt("Digite um número para verificar se ele é ou não PRIMO"))
let prime = true

if (num >= 0 && !isNaN(num) && Number.isInteger(num)) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        prime = false;
        break;
    }
  }
} else {
  alert("Número inválido --- ERRO! ")
}

if (num >= 0 && !isNaN(num) && Number.isInteger(num)) {
    if (prime && num != 1 && num != 0) {
      document.write(`${num} é um número primo.`)
    } else {
      document.write(`${num} não é um número primo.`)
    }
}

/*EXERCÍCIO 10*/
	let altura = Number(prompt(`Digite a sua altura`))

    let genero = Number(prompt('Digite 1 para sexo feminino ou 2 para sexo masculino'))

    if(genero == 1) {
        pesoIdeal = ((altura * 62.1) - 44.7).toFixed(2)
        document.write(`Seu peso ideal é ${pesoIdeal}`)
    }

    else if (genero == 2) {
        pesoIdeal = ((altura * 72.7) - 58).toFixed(2)
        document.write(`Seu peso ideal é ${pesoIdeal}`)
        
    } else {
        document.write(`Digite um número válido`)
    }

/*EXERCÍCIO 11*/
let horario = prompt("Digite qual o horário que você estuda utilizando M para matutino, V para vespertino e N para noturno")

switch (horario) {
	case "M":
		alert("Bom dia!")
		break;
	case 'V':
			alert(`Boa tarde!`)
		break;

	case 'N':
			alert(`Boa noite!`)
		break;
	default:
			alert(`Digite um horário válido.`)
			break;
	}

/*EXERCÍCIO 12*/

const age = Number(prompt("Digite a idade do candidato a doador"))

if (age >= 18 && age <= 67) {
    document.write("A pessoa pode doar sangue!")
} else {
    document.write("A pessoa NÃO pode doar sangue!")
}

/*EXERCÍCIO 13 */
let numeroArmazenado = Number(prompt('Digite um número inteiro maior que 1.'))
let contador = 0

for (let i = 1; i <= numeroArmazenado ; i++) {
	if (i %2 != 0) {
		document.write(` ${i}`)
		contador++ 
	}
} document.write(`<br> Foram impressos ${contador} números impares.`)


/*EXERCÍCIO 14*/
let readNumber = Number(prompt('Digite um número inteiro'))
let product = 0

while (product < 500) {
	readNumber = readNumber * 3
	product = readNumber
	break
}
document.write(`O último valor é: ${product}`)

/*EXERCÍCIO 15*/

let a = Number(prompt ("Digite o lado A do seu triângulo"))
let b = Number(prompt ("Digite o lado B do seu triângulo"))
let c = Number(prompt ("Digite o lado C do seu triângulo"))


if(a==b && a==c && b==c){
	document.write("É um triângulo EQUILÁTERO")
} else if(a==b || a==c || b==c){
	document.write("É um triângulo ISÓSCELES")
} else if (a!=b && a==c && b==c) {
	document.write("É um triângulo ESCALENO")
}

/*EXERCÍCIO 16*/
let currentYear = Number(prompt("Digite o ano atual"))
let birthYear = Number(prompt("Digite o ano do seu nascimento"))
 

if (currentYear - birthYear < 16){
	document.write(`Você não poderá votar este ano`)
} else {
	document.write(`Você poderá votar este ano`)
}

/*EXERCÍCIO 17*/
const validVotes = Number(prompt ("Digite o número de votos válidos"))
const nullVotes = Number(prompt ("Digite o número de votos nulos"))
const blankVotes = Number(prompt ("Digite o número de votos em branco"))
const totalVoters = Number(prompt ("Digite o número de eleitores"))


const totalVotes = validVotes + nullVotes + blankVotes
const percentValid =((validVotes * 100)/ totalVotes).toFixed(2)
const percentNull = ((nullVotes * 100)/ totalVotes).toFixed(2)
const percentBlank = ((blankVotes * 100)/ totalVotes).toFixed(2)


if (totalVotes <= totalVoters) {
	document.write(`O total de votos é : ${totalVotes}</br>`)
	document.write(`O percentual de votos válidos é: ${percentValid} % </br>`)
	document.write(`O percentual de votos nulos é: ${percentNull}% </br>`)
	document.write(`O percentual de votos em branco é: ${percentBlank}% </br>`)
} else {
	document.write (`O número total de votos é maior que o número total de eleitores. Favor revisar os dados fornecidos </br>`)
}
/*EXERCÍCIO 18*/
const productCost = Number(prompt("Digite o valor do produto"))

const paymentMethod = Number(prompt("Escolha uma das seguintes opções de pagamento utilizando o número correspondente:\n 1 - À vista \n 2 - Parcelado em 2 até 5 vezes\n 3 - Parcelado em 6 até 10 vezes\n 4 - Parcelado em 11 até 15 vezes"))

const interest6 = productCost + (productCost * 6/ 100)
const interest13 = productCost + (productCost * 13 / 100)

switch (paymentMethod) {
	case 1:
		productCost = productCost * 0,975
		document.write(`Você recebeu 25% de desconto no valor da sua compra, totalizando R$${productCost}</br> `)
		break;
	
	case 2:
		document.write (`O valor total da sua compra é de R${productCost} podendo ser parcelado das seguintes formas:</br>
		2 parcelas de R$ ${productCost/2} </br>
		3 parcelas de R$ ${productCost/3} </br>
		4 parcelas de R$ ${(productCost/4).toFixed(2)} </br>
		5 parcelas de R$ ${productCost/5} </br>`)
		break;

	case 3:
		document.write (`O valor total da sua compra é de R${productCost} podendo ser parcelado das seguintes formas:</br> 
		6 parcelas de R$ ${(interest6 / 6).toFixed(2)}</br>
		7 parcelas de R$ ${(interest6 / 7).toFixed(2)}</br> 
		8 parcelas de R$ ${(interest6 / 8).toFixed(2)}</br> 
		9 parcelas de R$ ${(interest6 / 9).toFixed(2)}</br> 
		10 parcelas de R$ ${(interest6 / 10).toFixed(2)}</br>`)
		break;
		
	case 4:
		document.write (`O valor total da sua compra é de R${productCost} podendo ser parcelado das seguintes formas:</br>
		11 parcelas de R$ ${(interest13 / 11).toFixed(2)}</br>
		12 parcelas de R$ ${(interest13 / 12).toFixed(2)}</br> 
		13 parcelas de R$ ${(interest13 / 13).toFixed(2)}</br> 
		14 parcelas de R$ ${(interest13 / 14).toFixed(2)}</br> 
		15 parcelas de R$ ${(interest13 / 15).toFixed(2)}</br>`)
		break;

	default:
		document.write("Escolha uma opção válida entre 1 e 4 para o pagamento")
		break;
}

