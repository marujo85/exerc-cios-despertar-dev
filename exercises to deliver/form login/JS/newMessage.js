// const formNewMessage = document.getElementById('form-new-message')
// const titleInput = document.getElementById('title')
// const descriptionInput = document.getElementById('description')

// formNewMessage.addEventListener('submit', (event) => {
//   event.preventDefault() // impede comportamento padrão submit

//   const titleValue = titleInput.value
//   const descriptionValue = descriptionInput.value

//   const newMessage = {
//     title: titleValue,
//     description: descriptionValue,
//     user_id: 1
//   }

//   createNewMessage(newMessage)
// })

// async function createNewMessage(message) {
//   try {
//     const response = await api.post('/notes', message)

//     if (response.status === 201) {
//       alert('Recado cadastrado com sucesso!')

//       titleInput.value = ""
//       descriptionInput.value = ""

//       location.href = "./index.html"
//     }
//   } catch (error) {
//     console.log('Erro ao cadastrar recado', error)
//   }
// }

const form =document.getElementById("form-new-message")
const title = document.getElementById("title")
const description = document.getElementById("description")

form.addEventListener('submit', (e) =>{
  e.preventDefault()

  const titleValue=title.value
  const descriptionValue = description.value

  const newMessage = {
    title: titleValue,
    description: descriptionValue,
    user_id: 1
  }

  createNewMessage(newMessage)
})

async function createNewMessage(){
  try{
    const response = await api.post('/notes', message)

    if(response.status ===201)
    alert('Recado cadastrado com sucesso')

    title.value = ''
    description.value = ''

    location.href = "./index.html"

  } catch(error){
    alert("Erro ao tentar criar a mensagem", error)
  }
}