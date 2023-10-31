/*let idade = 0
let contador = 0
let totalIdade = 0

while (idade !===)*/

/*let salarioH = 0
let salarioM = 0
confirm = true


while (continuar) {
	let salario =  Number(prompt("Qual o salário?"))
	sexo = prompt("O salário é pago a um homem ou a uma mulher?")

	if (sexo === "homem") {
		salarioH += salario
	} else if ( sexo === "mulher") {
		salarioM += salario
	}

	continuar = confirm("Deseja continuar?")

}
confirm ("Deseja continuar?")
while (continuar)



document.write(`O salário pago aos homens é de R$ ${salarioH}`)
document.write(`O salário pago às mulheres é de R$ ${salarioM}`)*/

/*const inicial = Number(prompt("Insira o valor inicial:"))
const final = Number(prompt("Insira o valor final:"))
const incremento = Number(prompt("Insira o valor do incremento:"))


document.write("Contagem: ")
document.write(`Valor inicial: ${inicial}`)
for (let valor = inicial; valor < final; valor += incremento){
	document.write(valor + " ")
}
document.write(`Valor final: ${final}`)
document.write("Acabou!")*/

/*const nome = prompt("Digite o nome do cliente")
const genero = prompt("Digite se o cliente é homem ou mulher")
let valorCompra = Number(prompt("Digite valor da compra"))

if (genero === 'mulher'){
	valorCompra *= 0.87
} else if (genero === 'homem') {
	valorCompra *= 0.95
} else {
	alert("Insira uma opção válida")
}

document.write(`Valor da compra é R$${valorCompra}`)*/

let distance = Number(prompt("Digite a distância que deseja percorrer em km"))

if( distance <= 200){
	document.write(`Valor da passagem = R$ ${(distance * 0.5).toFixed(2).replace(".", ",")}`)
} else {
	document.write (`Valor da passagem = R$ ${(distance * 0.45).toFixed(2).replace(".", ",")}`)
}

let larguraT = Number(prompt("Digite a largura do terreno"))
let comprimentoT = Number(prompt("Digite o comprimento do terreno"))
let resultT = larguraT * comprimentoT;

if (resultT < 100) {
  document.write("Terreno popular")
} else if (resultT >= 100 && resultT <= 500) {
  document.write("Terreno Master")
} else {
  document.write("Terreno VIP")
}


