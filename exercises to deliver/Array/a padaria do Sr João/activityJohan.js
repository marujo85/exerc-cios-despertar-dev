
const delivery = [{
	milis: 1700927301717,
	data: `aa-mm-dd`,
	nome: 'teste',
	quantidade: 100,
	preçoUnitario: 5
},
{
	milis: 1700927301717,
	data: `aa-mm-dd`,
	nome: 'Café Melita 500g',
	quantidade: 1,
	preçoUnitario: 12

},
{
	milis: 1700927301717,
	data: `aa-mm-dd`,
	nome: 'Pão integral Wickbold',
	quantidade: 3,
	preçoUnitario: 9

}
]

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
	}
]

///LISTAR OS PRODUTOS

function productListByPrice() {
	document.getElementById("informations").innerHTML = "Lista de produtos por preço <br>"
	products.sort(function (a, b) {
		return a.preço - b.preço
	})
	let listProducts = ''
	for (let elements of products) {
		for (key in elements) {
			listProducts += `${key}: ${elements[key]} |`
		}
		listProducts += `<br>`
	}
	document.getElementById("informations").innerHTML += listProducts
}

function productListByAbc() {
	document.getElementById("informations").innerHTML = ""
	document.getElementById("informations").innerHTML = "Lista de produtos por ordem alfabética<br>"
	products.sort(function (a, b) { return a.nome.localeCompare(b.nome) });

	let listProducts = ''
	for (let elements of products) {
		for (key in elements) {
			listProducts += `${key}: ${elements[key]} |`
		}
		listProducts += `<br>`
	}
	document.getElementById("informations").innerHTML += listProducts
}



///Adicionar um Novo Produto ao Catálogo:
let continuar = true

function registerNewProduct() {
	while (continuar) {
		const id = Date.now()
		const nome = prompt("Informe o nome do produto").toUpperCase()
		const estoque = prompt("Informe a quantidade do produto").toUpperCase()
		let preço = ''
		do {
			preço = +prompt("Informe o valor do produto em números")
		} while (isNaN(preço))
		continuar = confirm("Deseja adicionar mais um produto?")
		const newProduct = {
			id,
			nome,
			estoque,
			preço
		}
		products.push(newProduct)
	}
}

//Editar Produto do Catálogo: O sistema deve permitir que o usuário edite as informações de um produto existente no catálogo. Lembre-se que o estoque nunca pode ser menor que 0.
function editProduct() {
	const verificarId = prompt("Informe o ID do produto deseja editar")
	const indice = products.findIndex(element => verificarId == element.id)
	if (indice > -1) {
		let novoEstoque = ''
		const novoNome = prompt("Informe o novo nome do produto")
		do {
			novoEstoque = +prompt("Informe qual o valor atual do estoque (valor maior que 0)")
		} while (novoEstoque < 0)
		const novoPreço = Number(prompt("Informe o novo preço do produto"))
		products[indice].nome = novoNome
		products[indice].estoque = novoEstoque
		products[indice].preço = novoPreço
	} else alert("Produto não encontrado")
	productListByPrice()
}


///Remover um Produto do Catálogo: O sistema deve permitir que o usuário remova um produto do catálogo.
function removeProduct() {
	const verificarId = prompt("Informe o ID do produto deseja excluir")
	const indice = products.findIndex(element => verificarId == element.id)
	if (indice > -1) {
		products.splice(indice, 1)
	} else alert("Produto não encontrado")
	productListByPrice()
}


//Receber Pedidos dos Clientes: O sistema deve permitir que os clientes façam pedidos. Um pedido deve conter um ou mais produtos e a quantidade desejada de cada um. O sistema deve armazenar um histórico de pedidos. 
let continuar2 = true
let show = ''
let deliveryNumber = 1
function deliveryProduct() {
	document.getElementById("informations").innerHTML = "Pedidos: <br>"
	while (continuar2) {
		const verificarNome = prompt("Informe o nome do produto que deseja comprar. Segue lista dos produtos disponíveis:\n- Leite Italac 1l\n- Café Melita 500g\n - Manteiga Aviação com sal 500g\n - Pão francês congelado 1kg\n - Pão integral Wickbold").toUpperCase()
		const indice = products.findIndex(element => verificarNome === element.nome)
		do {
			quantidadeProduto = Number(prompt(`Informe a quantidade de ${verificarNome} que gostaria de comprar`))
		} while (quantidadeProduto === 0 || isNaN(quantidadeProduto))
		const data = new Date()
		const milis = Date.now()
		console.log(indice)

		if (indice > -1) {
			if (quantidadeProduto <= products[indice].estoque && products[indice].estoque > 0) {
				console.log(quantidadeProduto, products[indice].estoque);
				console.log(delivery, deliveryNumber);
				if (delivery[deliveryNumber] === undefined) {
					delivery[deliveryNumber] = ([{
						milis,
						data: `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`,
						numeroDoPedido: deliveryNumber,
						nome: verificarNome,
						quantidade: quantidadeProduto,
						preçoUnitario: products[indice].preço

					}])
				} else {
					delivery[deliveryNumber].push({
						data: `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`,
						numeroDoPedido: deliveryNumber,
						nome: verificarNome,
						quantidade: quantidadeProduto,
						preçoUnitario: products[indice].preço
					})
				}
				products[indice].estoque -= quantidadeProduto

				console.log('estoque atualizado após compra: ' + products[indice].estoque);
				show += delivery[deliveryNumber].length === 1 ? `<b>Número do pedido: ${deliveryNumber} de ${delivery[deliveryNumber][0].data}</b><br> Quantidade: ${quantidadeProduto} Produto: ${products[indice].nome}<br>` : `Quantidade: ${quantidadeProduto} Produto: ${products[indice].nome}<br>`
			} else {
				alert('quantidade indisponível, estoque máximo: ' + products[indice].estoque)
			}
		} else {
			alert('produto não encontrado')
		}
		console.log(delivery)

		continuar2 = confirm("Deseja adicionar mais um produto?")

	}
	deliveryNumber++
	document.getElementById("informations").innerHTML = delivery[0][0].nome + '<br>' + show
}
// 				const preçoProduto = products[indice].preço

// 				delivery.push({
// 					id: Date.now(),
// 					nome: verificarNome,
// 					quantidade: quantidadeProduto,
// 					preço: preçoProduto
// 				})
// 			} else {
// 				alert("Quantidade inválida. A quantidade tem que ser maior do que zero")
// 			}
// 		} else {
// 			alert("Produto não encontrado")
// 		}
// 		continuar2 = confirm("Deseja adicionar mais um produto?")
// 	}
// 	document.write(JSON.stringify(delivery))
// }


//Somar o valor do estoque: João deve poder somar o preço de venda do seu estoque
function sumAllMyStock() {
	const allMyStock = products.reduce((accumulator, currentValue) => {
		return accumulator + (currentValue.preço * currentValue.estoque)
	}, 0)
	document.getElementById("informations").innerHTML = `O valor total do estoque é: <b>R$${allMyStock} </b><br>`
}
//Relatório Diarios: João deve poder fazer um relatório das deliverySales que aconteceram em um período específico que ele selecionar. Deve conter quantas deliverySales foram realizadas e qual o faturamento.

function report() {
	let toDisplay = '';
	let show = true;
	let totaldeliverySales = 0;
	const deliverySales = [];

	let value1 = prompt('Insira desde que data deseja buscar:\nex: 2023-11-24');
	let value2 = prompt('Insira até que data deseja buscar:\nex: 2023-11-24');

	data1 = new Date(`${value1}T10:00:00`).getTime();
	data2 = new Date(`${value2}T10:00:00`).getTime();

	delivery.forEach(elements => {
		for (let element in elements) {
			if (elements[element].milis > data1 && elements[element].milis < data2) {
				toDisplay += Object.keys(elements).map(key => {
					if (key !== 'milis') {
						toDisplay += `${key}: ${elements[key]} | `;
						if (key === 'preçoUnitario') {
							priceOfProduct = elements[key];
						}
						if (key === 'quantidade') {
							quantityOfProduct = elements[key];
						}
					}
				}).join('<br>');

				toDisplay += '<br>';
				totaldeliverySales += Number(priceOfProduct * quantityOfProduct);
				deliverySales.push(elements);
			} else {
				toDisplay = 'Nenhum resultado';
				show = false;
			}
		}
	});

	const informations = document.getElementById('informations');
	informations.innerHTML = `<b>Relatório dos pedidos no período de ${value1} e ${value2}:</b><br>${toDisplay}`;

	if (show) {
		informations.innerHTML += `<b>Entre ${value1} e ${value2}, ${deliverySales.length === 1 ? 'foi efetuada ' + deliverySales.length + ' venda' : 'foram efetuadas ' + deliverySales.length + ' deliverySales'}, valor total do período: ${totaldeliverySales}<b>`;
	}
}

