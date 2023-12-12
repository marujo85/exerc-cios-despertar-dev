async function deleteMessage(messageId) {

  
	try {
	  const response = await api.delete(`/notes/${messageId}`)
  
	  if (response.status === 200) {
		alert('Recado excluído com sucesso')
	  }
  
	} catch (error) {
	  console.log('Erro ao excluir recado', error)
	}
  }