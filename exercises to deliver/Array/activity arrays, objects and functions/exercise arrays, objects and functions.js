const dataList = [
	{
		name: 'Roger Medeiros',
		sex: 'M',
		salary: 3250,
	},
	{
		name: 'Carolina Silva',
		sex: 'F',
		salary: 1200
	},
	{
		name:'Cristina Avila',
		sex: 'F',
		salary: 8100
	},
	{
		name:'Gustavo Hoffman' ,
		sex: 'M',
		salary: 5200.35
	},
	{
		name: 'Eva Trindade',
		sex: 'F',
		salary: 2501
	},
	{
		name:'Andre Mathias',
		sex: 'M',
		salary:1750
	},
	{
		name: 'Joice Castro da Silva',
		sex: 'F',
		salary: 3350.25
	}
]

// 1. Imprima no console a quantidade de pessoas Total.
console.log(`Quantidade de pessoas na lista: ${dataList.length}`)



// 2. Imprima no console a quantidade de pessoas pessoas do sexo Feminino.
function takeJustFemales (dataList) {
	let females = 0

	dataList.forEach(item => {
		if (item.sex === 'F'){
			females ++
		}
	})
	return females
}
console.log(`Quantidade de pessoas do sexo feminino na lista: ${takeJustFemales(dataList)}`)



// 3. Imprima no console a soma do salário de todas as pessoas.
function takeTheSalary (dataList) {
	let sumSalary = 0
	for (item of dataList){
		sumSalary += item.salary
	}
	return sumSalary
} 
console.log(`Soma de todos os salários: R$${takeTheSalary(dataList)}`)



// 4. Imprima no console a média do salário de todas as pessoas.
function salaryMedia (dataList) {
	let sumSalary = 0
	for (item of dataList){
		sumSalary += item.salary
	}
	return (sumSalary/7).toFixed(2)
} 
console.log(`Média dos salários: R$${salaryMedia(dataList)}`)



// 5. Imprima no console a soma do salário de todos as pessoas do sexo Masculino
function salaryMales (dataList) {
	let salaryM = 0
	for(item of dataList){
		if (item.sex === "M") {
			salaryM += item.salary
		}
	}
	return salaryM
}
console.log(`Soma dos salários de todas as pessoas do sexo masculino: R$${salaryMales(dataList)}`)



// 6. Imprima no console a média do salário de todas as pessoas do sexo Masculino
console.log(`Média do salário de todas as pessoas do sexo masculino: R$${((salaryMales(dataList))/7).toFixed(2)}`)



// 7. Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.
const moreOff7000 = dataList.some(item => item.salary > 7000) 
console.log (`Existe algum salário na lista maior que R$7000? ${moreOff7000}`)



// 8. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.
const findEva = dataList.findIndex(function(dataList){
	return dataList.name === 'Eva Trindade'
})
console.log(`A posição da pessoa de nome Eva Trindade é ${findEva}`)



// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".
const findTheSilvas = dataList.filter(function(nome){
	return nome.name.includes("Silva")
})
console.log(findTheSilvas)



// 10. Imprima os nomes utilizando o MAP
const totalNames = dataList.map(item => item.name)
console.log(totalNames)