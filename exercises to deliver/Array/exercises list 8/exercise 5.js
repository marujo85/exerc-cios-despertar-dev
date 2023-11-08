let names = []

while (names.length < 5 ) {
	names.push(prompt("Digite 5 nomes, por favor"))
}
document.write(`Esta é a lista de nomes:${names}`)
document.write('</br>')
document.write(`Esta é a lista inversa de nomes: ${names.reverse()}`)