/*Exercício 1*/

let names = ["mirna", "carla", "marcos"]

for (let i = 0; i < names; i++){
	console.log(names[i])
}


/*Exercício 2*/

let numberS = [5, 10, 8, 13, 4]
let sumN = 0

for (const numero of numberS) {
	sumN =+ numero
	console.log(sumN)
}
document.write (`${sumN}`)


/*Exercício 3*/

const fruitsList = ['Strawberry', 'Blueberry', 'Blackberry', ]

fruitsList.push ('Raspberry')

console.log(fruitsList)

fruitsList.pop()

console.log(fruitsList)

fruitsList.shift()

console.log(fruitsList)

fruitsList.unshift('Strawberry')
console.log(fruitsList)
