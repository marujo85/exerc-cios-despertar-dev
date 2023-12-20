const formLogin = document.getElementById('form-login')
const errorSpace = document.querySelector('#error-space')
const emailInput = document.getElementById('email-login')
const passwordInput = document.getElementById('password-login')

formLogin.addEventListener('submit', (e) => {
	e.preventDefault() // impedir comportamento padrão do submit
  
	const data = {
	  email: emailInput.value,
	  password: passwordInput.value,
	}

	if (!emailInput.value){
		setError(emailInput, "Email é obrigatório")
	} else {
		setSucces(emailInput)
	}
	if (!passwordInput.value){
		setError(passwordInput, "Senha obrigatória")
	} else if((passwordInput.value).length < 6){
		setError(passwordInput, "A senha deve ter mais do que 6 caracteres")
	} else{
		setSucces(passwordInput)
	}
	if (emailInput.value && (passwordInput.value),length >= 6){
		login(data)
	}
	
  })

async function login(data) {
	try{
		const response = await api.post('/users/login', data)
		
		if (emailInput.value === "" || passwordInput.value === "") {
			errorSpace.innerHTML = `<p class="form-control error">Preencha todos os campos para continuar!</p>`
		
		}if (response.status === 200) {
			const userData = response.data
	  
			localStorage.setItem('userId', userData.userId)
			location.href = "listar-recados.html"
		  }
		} catch (error) {
		  console.log('Erro ao fazer login', error)
		}
	  }

function setError(input, message){
	const formControl = input.parentElement
	const small = formControl.querySelector('small')

	small.textContent = message
	formControl.classlist.remove('success')
	formControl.classlist.add('error')

}
 
function setSucces (input){
	const formControl = input.parentElement
	formControl.classlist.remove('error')
	formControl.classlist.add('success')
}
