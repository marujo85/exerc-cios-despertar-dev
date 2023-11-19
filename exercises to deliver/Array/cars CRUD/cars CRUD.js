let carList = [
	{
		id: 11111,
		model: 'bz4x',
		brand: 'Toyota',
		year: 2023,
		color: 'black',
		price: 42000,
	},

	{
		id: 22222,
		model: 'Sequoia',
		brand: 'Toyota',
		year: 2023,
		color: 'red',
		price: 60875,
	},
	{
		id: 33333,
		model: '4Runner',
		brand: 'Toyota',
		year: 2024,
		color: 'olive',
		price: 40455,
	},
	{
		id: 44444,
		model: 'gr86 Trueno',
		brand: 'Toyota',
		year: 2024,
		color: 'white',
		price: 42000,
	},
	{
		id: 55555,
		model: 'Yukon',
		brand: 'GMC',
		year: 2023,
		color: 'black',
		price: 61735
	}
]

function compareCarPrice(a, b) {
	console.log(a, b)
	return a.price - b.price
}

function takeMostExpensive (a, b){
	
}
console.log(carList)
carList = carList.sort(compareCarPrice)
console.log(carList)
let car_id = null

function requestRegister() {
	const model = prompt("Please, enter the car model")
	const brand = prompt("Please, enter the car brand")
	const year = Number(prompt("Please, enter the car year"))
	const color = prompt("Please, enter the car color")
	const price = Number(prompt("Please, enter the car price"))
	registerNewCar(model, brand, year, color, price)
	alert("Car added succesfully")
}

function registerNewCar(model, brand, year, color, price) {
	const newCar = {
		id: Date.now() + 10,
		model: model,
		brand: brand,
		year: year,
		color: color,
		price: price,
	}
	carList.push(newCar)
	
}

function showListCars() {
	for (car of carList) {
		alert(`ID: ${car.id}| Model: ${car.model}| Brand: ${car.brand} | Year: ${car.year} | Color: ${car.color} | Price: $${car.price} </br>`)
	}
}

function filterBrand(brand) {
	const carListByBrand = carList.filter(car => car.brand.toLowerCase() === brand.toLowerCase());
	for (car of carListByBrand) {
		alert(`ID: ${car.id}| Model: ${car.model}| Color: ${car.color} | Price: ${car.price} </br>`)
	}
}

function carExists(id) {
	const index = carList.findIndex(car => car.id === id)
	if (index < 0) {
		alert("ID provided is not in list")
		return false
	}
	return true
}

function updateListCars(id, newcolor, newprice) {
	const index = carList.findIndex(car => car.id === id)
	if (index > 0) {
		carList[index].color = newcolor,
			carList[index].price = newprice,
			alert("Changes saved succesfully")

	}

}

function deleteCar(id) {
	const index = carList.findIndex(car => car.id === id)
	alert(carList[index].model + "deleted")
	carList.splice(index, 1)
}

let exit = false;
do {
	let optionsCRUD = Number(prompt("Welcome to the cars CRUD! \nFor now, we have 5 registered cars. Please choose the option you want:\n 1- Register vehicle\n 2- List registered vehicles\n 3- Filter vehicle by Brand\n 4- Update a registered car\n 5- Delete a registered car\n 6- Exit the cars CRUD"))
	switch (optionsCRUD) {

		case 1:
			let continuar = true;
			do {
				requestRegister()
				continuar = confirm("Add one more car? (Y/N)")
			} while (continuar)
			break;
		case 2:
			showListCars()
			break;

		case 3:
			const brand = prompt("Please, write the brand you want")
			filterBrand(brand)

			break;

		case 4:
			car_id = Number(prompt("Please, enter the id of the vehicle"))
			if (carExists(car_id)) {
				const newcolor = prompt("Please, enter the car color")
				const newprice = Number(prompt("Please, enter de price car"))
				updateListCars(car_id, newcolor, newprice)
			}
			break;

		case 5:
			car_id = Number(prompt("Please, enter the id of the vehicle"))
			deleteCar(car_id)

			break;
		case 6:
			alert("We hope to be able to assist you next time!Bye!")
			exit = true;
			break;

		default:
			alert("Please, choose a valid number")
			break;
	}
} while (!exit);







