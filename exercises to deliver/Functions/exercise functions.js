// ATIVIDADE 1
// function mediaAluno(notas, metodo){
// 	const [nota1, nota2, nota3] = notas

// 	if (metodo === "A")
// 	return (nota1 + nota2 + nota3) / 3

// 	if (metodo === "P")
// 	return (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10

// }

// console.log(mediaAluno([9, 4, 5], 'A'))


// ATIVIDADE 2
// function verificationNumber (number){
// 	return (number % 2 !== 0)
	
// }

// console.log(verificationNumber(10))


// ATIVIDADE 3
// let number = 1

// function valorInt(number){
// 	if(number === 2) return true
// 	if (number % 2 === 0) return false

// 	for (let i = 3; i < number; i += 2){
// 		if (number % i === 0 )
// 		return false
// 	}

// 	return true
// }

// console.log(valorInt(22))



// ATIVIDADE 4
// function converterTempo(segundos) {
//     const horas = Math.floor(segundos / 3600)
//     segundos %= 3600
//     const minutos = Math.floor(segundos / 60)
//     segundos %= 60
//     return `${horas}: ${minutos} ${segundos}`
// }
// const tempoSegundos = 3672
// const tempoFormatado = converterTempo(tempoSegundos)

// console.log(converterTempo(tempoSegundos))
// console.log(converterTempo(tempoSegundos))

// function perfect(valueTest){
// 	if(valueTest <= 1)
// 	return false;


// ATIVIDADE 5
// 	let diviserSum = 1;

// 	for(let i = 2; i < valueTest; i++){
// 		if (valueTest % i === 0)
// 		diviserSum += i;
// 	}
// 	return diviserSum === valueTest
// }
// console.log(perfect(12837611))


// ATIVIDADE 6
// function acessoAoSite(nome) {
//    alert(`Seja bem vinda ao, ${nome}`)

// }

// acessoAoSite('Carla')


// ATIVIDADE 7
// let aplicacao = "Growdev"
// function mostrarMensagem() {
//     console.log(`Acesso à aplicação ${aplicacao}`);
//     alert(`Acesso à aplicação ${aplicacao}`)
// }
// mostrarMensagem()
 

// ATIVIDADE 8
// function mostrarDobro(numb){
// 	alert(`O dobro do ${numb} é ${numb * 2}`)
// }

// mostrarDobro(8)

// ATIVIDADE 9

function mediaAluno(nota1, nota2, nota3, nome){
	
	console.log([nota1, nota2, nota3])
	return document.write(`${nome}, sua média é ${(nota1 + nota2 + nota3) / 3}`)
	
	
	}
console.log(mediaAluno(9, 4, 5, 'Pietro'))



