
const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];

const salaryUpTo7500 = salarios.findIndex(function(salary){
	return salary >= 7500.00
})

document.write(`O index do primeiro salário > 7500 é: ${salaryUpTo7500}</br>`)


// B PART
const newList = salarios.filter(function(salary){
	return salary > 8000.00
})
document.write(`Os salários > 8000 são: ${newList}</br>`)

