
function mediaAluno(nota1, nota2, nota3, nome){
	
	console.log([nota1, nota2, nota3])
	return document.write(`${nome}, sua média é ${(nota1 + nota2 + nota3) / 3}`)
	
	
	}

console.log(mediaAluno(9, 4, 5, 'Pietro'))
