let number = 1

function valorInt(number){
	if(number === 2) return true
	if (number % 2 === 0) return false

	for (let i = 3; i < number; i += 2){
		if (number % i === 0 )
		return false
	}

	return true
}

document.write(`O número 22 é primo? <strong>${valorInt(22)}</strong>`)
