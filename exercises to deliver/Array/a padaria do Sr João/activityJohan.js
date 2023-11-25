// let options = Number(prompt("Hi!, what you want to do today?:\n" ))
const delivery = []

const products = [
	{
		id: 11111,
		nome: 'Café Melita 500g',
		estoque: 500,
		preço: 12
	},
	{
		id: 22222,
		nome: 'Leite Italac 1l',
		estoque: 200,
		preço: 5
	},
	{
		id: 33333,
		nome: 'Pão integral Wickbold',
		estoque: 500,
		preço: 10
	},
	{
		id: 44444,
		nome: 'Pão francês congelado 1kg',
		estoque: 500,
		preço: 7
	},
	{
		id: 55555,
		nome: 'Manteiga Aviação com sal 500g',
		estoque: 500,
		preço: 9
	},
]

///LISTAR OS PRODUTOS

function productListByPrice (){
	document.getElementById("informations").innerHTML = "Lista de produtos por preço <br>"
	products.sort (function (a, b) {
		return a.preço - b.preço
	}) 
	let listProducts = ''
	for (let elements of products){
		for (key in elements){ 
			listProducts += `${key}: ${elements[key]} |`
		}
		listProducts += `<br>`
	}
	document.getElementById("informations").innerHTML += listProducts
}

function productListByAbc (){
	document.getElementById("informations").innerHTML = ""
	document.getElementById("informations").innerHTML = "Lista de produtos por ordem alfabética<br>"
	products.sort(function(a, b){return a.nome.localeCompare(b.nome)});
	
	let listProducts = ''
	for (let elements of products){
		for (key in elements){ 
			listProducts += `${key}: ${elements[key]} |`
		}
		listProducts += `<br>`
	}
	document.getElementById("informations").innerHTML += listProducts
}



///Adicionar um Novo Produto ao Catálogo:
let continuar = true

function registerNewProduct (){
	while (continuar){
	const id = Date.now()
	const nome = prompt("Informe o nome do produto").toUpperCase()
	const estoque = prompt("Informe a quantidade do produto").toUpperCase()
	let preço = ''
	do {
	preço = +prompt("Informe o valor do produto em números")	
}	while (isNaN(preço))
	continuar = confirm("Deseja adicionar mais um produto?")
	const newProduct = {
		id,
		nome, 
		estoque, 
		preço
	}
	products.push(newProduct)
}}

//Editar Produto do Catálogo: O sistema deve permitir que o usuário edite as informações de um produto existente no catálogo. Lembre-se que o estoque nunca pode ser menor que 0.
function editProduct () {
	const verificarId = prompt("Informe o ID do produto deseja editar")
	const indice = products.findIndex (element => verificarId == element.id)
	if (indice > -1){
		let novoEstoque = ''
		const novoNome = prompt("Informe o novo nome do produto")
		do {
		novoEstoque = +prompt("Informe qual o valor atual do estoque (valor maior que 0)")	
	} while(novoEstoque < 0)
		const novoPreço = Number(prompt("Informe o novo preço do produto"))
		products[indice].nome = novoNome
		products[indice].estoque = novoEstoque
		products[indice].preço = novoPreço
} else alert("Produto não encontrado")
productListByPrice()
}


///Remover um Produto do Catálogo: O sistema deve permitir que o usuário remova um produto do catálogo.
function removeProduct () {
	const verificarId = prompt("Informe o ID do produto deseja excluir")
	const indice = products.findIndex (element => verificarId == element.id)
	if (indice > -1){
	products.splice(indice, 1)
} else alert("Produto não encontrado")
productListByPrice()
}


//Receber Pedidos dos Clientes: O sistema deve permitir que os clientes façam pedidos. Um pedido deve conter um ou mais produtos e a quantidade desejada de cada um. O sistema deve armazenar um histórico de pedidos. 
let continuar2 = true
function deliveryProduct (){
	while (continuar2){
		const verificarNome = prompt("Informe o nome do produto que deseja comprar. Segue lista dos produtos disponíveis:\n- Leite Italac 1l\n	- Café Melita 500g\n -Manteiga Aviação com sal 500g\n - Pão francês congelado 1kg\n - Pão integral Wickbold")
		const indice = products.findIndex (element => verificarNome === element.nome)
		if (indice > -1){
			const quantidadeProduto = +prompt(`Informe a quantidade de ${verificarNome} que gostaria de comprar`)
			if(quantidadeProduto > 0){
				delivery.push({
					nome:verificarNome,
					quantidade: quantidadeProduto
				})				
			} else{
				alert("Quantidade inválida. A quantidade tem que ser maior do que zero")
			}
		} else {
			alert("Produto não encontrado")
		}
		continuar2 = confirm("Deseja adicionar mais um produto?")
	}
	document.write(JSON.stringify(delivery))
} 


//Somar o valor do estoque: João deve poder somar o preço de venda do seu estoque
function sumAllMyStock (){
const allMyStock = products.reduce((accumulator, currentValue) => {
	return accumulator + (currentValue.preço * currentValue.estoque)
}, 0 )
document.getElementById("informations").innerHTML = `O valor total do estoque é: R$${allMyStock} <br>`
}
//Relatório Diarios: João deve poder fazer um relatório das vendas que aconteceram em um período específico que ele selecionar. Deve conter quantas vendas foram realizadas e qual o faturamento.

function getTherelatory (){
	const date = prompt("Insira")
}
