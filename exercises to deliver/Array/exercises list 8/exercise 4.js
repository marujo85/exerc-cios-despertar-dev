let numbers = [1,2,3,4,5,6,7,8,9,10]
let requestNumber = Number(prompt("Insira seu número"))
let founded = false

for(let number of numbers){
	if (number === requestNumber){
		founded = true
		break
	}
}

if(founded){
	document.write("Você acertou. O seu número está na lista")
} else {
	document.write("Errou. O número inserido não faz parte da lista")
}
