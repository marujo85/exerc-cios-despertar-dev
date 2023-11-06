const validVotes = Number(prompt ("Digite o número de votos válidos"))
const nullVotes = Number(prompt ("Digite o número de votos nulos"))
const blankVotes = Number(prompt ("Digite o número de votos em branco"))
const totalVoters = Number(prompt ("Digite o número de eleitores"))


const totalVotes = validVotes + nullVotes + blankVotes
const percentValid =((validVotes * 100)/ totalVotes).toFixed(2)
const percentNull = ((nullVotes * 100)/ totalVotes).toFixed(2)
const percentBlank = ((blankVotes * 100)/ totalVotes).toFixed(2)

if (totalVotes <= totalVoters) {
	document.write(`O total de votos é : ${totalVotes}</br>`)
	document.write(`O percentual de votos válidos é: ${percentValid} % </br>`)
	document.write(`O percentual de votos nulos é: ${percentNull}% </br>`)
	document.write(`O percentual de votos em branco é: ${percentBlank}% </br>`)
} else {
	document.write (`O número total de votos é maior que o número total de eleitores. Favor revisar os dados fornecidos </br>`)}