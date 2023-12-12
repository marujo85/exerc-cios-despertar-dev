
const nome = document.getElementById('name')
const avatar = document.getElementById('avatar')
const senha = document.getElementById('key')
const email = document.getElementById('email')
const errorSpace = document.querySelector('#error-space')
const form = document.querySelector('form')

async function createNew(newUser) {
	try {
		const response = await api.post('/users', newUser)

		if (response.status === 201)
			alert('Usuário cadastrado com sucesso')

		nome.value = ''
		avatar.value = ''
		senha.value = ''
		email.value = ''
		location.href = "./login.html"

	} catch (error) {
		alert("Erro ao tentar criar o novo usuário", error)
	}
}


form.addEventListener('submit', (e) => {
	e.preventDefault()
	if (!nome.value || !avatar.value || !senha.value || !email.value) {
		errorSpace.innerHTML = `<p class="form-control error">Preencha todos os campos para continuar!</p>`

	} else {
		const nomeValue = nome.value
		const avatarValue = avatar.value
		const senhaValue = senha.value
		const emailValue = email.value

		const newUser = {
			nome: nomeValue,
			avatar: avatarValue,
			senha: senhaValue,
			email: emailValue
		}
		createNew(newUser)
	}
})



