const form = document.getElementById('form')

form.addEventListener('submit', (e)=>{
	e.preventDefault()
	console.log('Nome: ' + nome.value)
	console.log('Endereço: ' + endereço.value)
	console.log('Cidade: ' + cidade.value)
	console.log('Estado: ' + estado.value)
	console.log('Cargo:' + document.querySelector('input[name="cargo"]:checked').value)

	const interesses = []
	const checkInteresses = document.getElementsByName('interesses')
	checkInteresses.forEach(check =>{
		if(check.checked){
			interesses.push(check.value)
		}
	})
	    console.log('Interesses: ' + interesses.join(','))
		console.log('Mini-currículo: ' + mini_curriculo.value)
})



// const checkInteresses = document.querySelectorAll('input[name="interesse"]:checked')
//     if (checkInteresses.length === 0) {
//         alert('Marque ao menos uma área de interesse!')