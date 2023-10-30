/*let moreH = 0
let lessH = 999

for (let i = 0; i <= 14; i++) {
	let height = Number(prompt("Digite uma altura")) 
	if (height > moreH) {
	moreH = height
	} 
	else if (height < lessH){
		lessH = height
	}
}

document.write(`A maior altura é ${moreH}</br>`)
document.write (`A menor altura é ${lessH}</br>`)



let pedroH = 150
let lucasH = 110
let years = 0

while (pedroH >= lucasH) {
    pedroH += 2
    lucasH += 3
    years += 1
}
document.write(`Lucas e Pedro alcançaram o mesmo tamanho em ${years - 1} anos </br>`)
document.write(`Lucas será maior que Pedro em ${years} anos</br>`)


const numeroTabuada = Number(prompt("Digite um número"))
const iteracoes = Number(prompt("digite o numero de iterações"))

for (let i = 0; i <= iteracoes; i++) {
	console.log(`${i} x ${numeroTabuada} = ${i * numeroTabuada}`)
}


let mult3 = 0
let mult5 = 0

for (let i = 0; i <250; i++){
	if (i % 3 === 0){
		mult3 += i + ", "
	}
	if (i % 5 === 0){
		mult5 += i + ", "
}
}
document.write(`Divisivel por 3: </br> ${mult3} </br></br></br></br>`)
document.write(`Divisivel por 5: </br> ${mult5} </br></br></br></br>`)


const integerNumber = Number(prompt("Digite um valor"))
let message = "Contagem: "

for (let i= 0 ; i <= integerNumber; i++){
	console.log(i)
	message += i + ","
}
document.write(message + "FIM")

let contagem = ""

for (let i = 30; i >= 1; i--) {
	let primo = true;
  
	for (let j = 2; j < i; j++) {
	  if (i % j === 0) {
		primo = false;
		break;
	  }
	}
  
	if (primo) {
		contagem += `[${i}]`
	} else {
	  contagem += i + ",";
	}
  }
console.log(contagem)*/

let totalSomado = 0	
let numerosPositivos = 0
let numerosNegativos = 0
	


for (let i = 0; i <= 10; i++ ){
	const lerNumero = Number(prompt("Digite um número: "))
	totalSomado += lerNumero

	if (lerNumero >= 0){
		numerosPositivos++
	} else if (lerNumero < 0){
		numerosNegativos++
	}

}

	
let mediaNumeros = totalSomado/10
let porcentagemPositivos = (numerosPositivos / 10) * 100
let porcentagemNegativos = (numerosNegativos / 10) * 100

console.log(`Média aritimetica: ${mediaNumeros}`)
console.log(`Total de números POSITIVOS: ${numerosPositivos}`);
console.log(`Total de números NEGATIVOS: ${numerosNegativos}`);
console.log(`Média de números POSITIVOS: ${porcentagemPositivos}`);
console.log(`Média de números NEGATIVOS: ${porcentagemNegativos}`);