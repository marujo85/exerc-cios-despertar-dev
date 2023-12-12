const formEditMessage = document.getElementById('form-edit-message')

const titleInput = document.getElementById('title-edit')
const descriptionInput = document.getElementById('description-edit')


async function populateEditForm(){
	try{
		const response = await api.get(`/notes/${messageId}`)
		const message = response.data 

		titleInput.value = message.title
		descriptionInput.value = message.description
	} catch (error){
		console.log('erro ao buscar...', error)
	}
}

populateEditForm()

formEditMessage.addEventListener('submit', (event)=>{
	event.preventDefault()

	const titleValue = titleInput.value
	const descriptionValue = descriptionInput.value

	const editMessage = {
		title: titleValue,
		description: descriptionValue
	}

	updateMessage(messageId, editMessage)

})

async function updateMessage() {
	const editMessage = {
	  title: 'Novo Título',
	  description: 'Uma descrição legal'
	}
  
	try {
	  const idMessage = 156
	  const response = await api.put(`/notes/${idMessage}`, editMessage)
  
	  if(response.status === 200) {
		alert('Recado atualizado com sucesso!')
	  }
	}catch (error) {
	  console.log('Erro ao atualizar recado.')
	}
  }