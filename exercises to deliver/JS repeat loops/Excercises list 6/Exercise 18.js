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