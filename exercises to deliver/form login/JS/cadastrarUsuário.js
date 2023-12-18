const form = document.querySelector('form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const errorSpace = document.querySelector('#error-space')


form.addEventListener('submit', (e) => {
	e.preventDefault()
	if (!nameInput.value ||!passwordInput.value || !emailInput.value) {
		errorSpace.innerHTML = `<p class="form-control error">Preencha todos os campos para continuar!</p>`

	} else {
		const newUser = {
			name: nameInput.value,
			email: emailInput.value,
			password: passwordInput.value,
		}
		createNew(newUser)
	}
})

async function createNew(newUser) {
	try {
		const response = await api.post('/users/signup', newUser)

		if (response.status === 201)
			alert('Usuário cadastrado com sucesso')

		location.href = "./login.html"

	} catch (error) {
		alert("Erro ao tentar criar novo usuário", error)
	}
}


