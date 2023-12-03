
const card = document.querySelectorAll('.card')
const title = document.querySelectorAll('.titulo-card')
const description = document.querySelectorAll('.descricao-card')
const deletButton = document.querySelectorAll('.botao-apagar')
const editButton = document.querySelectorAll('.botao-editar')

card.forEach(card => {
card.style.backgroundColor = '#dd7108'})

title.forEach(title => {
	title.innerText = 'Meu card'
	title.style.color = '#2b385b'
})

description.forEach(description =>{
	description.innerText = 'Description change by JavaScript'
	description.style.color = 'white'
	description.style.margin = '3em 0'
	description.style.fontSize = '15px'
})

deletButton.forEach(deletButton =>{
	deletButton.setAttribute('onclick', 'deletB()')
	deletButton.style.backgroundColor = 'green'
	deletButton.style.color = 'white'
	deletButton.style.padding = '0.5em'
	deletButton.style.borderRadius = '10px'
	deletButton.style.borderStyle = 'none'
})

editButton.forEach(editButton =>{
	editButton.setAttribute('onclick', 'editB()')
	editButton.style.backgroundColor = 'red'
	editButton.style.color = 'white'
	editButton.style.padding = '0.5em'
	editButton.style.borderRadius = '10px'
	editButton.style.borderStyle = 'none'
})

function editB (){
	alert('clicou em editar')
}

function deletB (){
	const yRShure = confirm('tem certeza de que quer editar alguma coisa?')
	if(yRShure){
		alert('Done!')
	} else {
		alert('Cancel')
	}
}

