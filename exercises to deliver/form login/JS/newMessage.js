const form =document.getElementById("form-new-message")
const title = document.getElementById("title")
const description = document.getElementById("description")

form.addEventListener('submit', (e) =>{
  e.preventDefault()

  const titleValue=title.value
  const descriptionValue = description.value

  const userId = localStorage.getItem('userId')

  if (!userId) {
    alert('Você precisa fazer login para cadastrar um recado.')
  }

  const newMessage = {
    title: titleValue,
    description: descriptionValue,
    userId
  }

  createNewMessage(newMessage)
})

async function createNewMessage(message){
  try{
    const response = await api.post('/notes', message)

    if(response.status ===201)
    alert('Recado cadastrado com sucesso')

    title.value = ''
    description.value = ''

    location.href = "./listar-recados.html"

  } catch(error){
    alert("Erro ao tentar criar a mensagem", error)
  }
}