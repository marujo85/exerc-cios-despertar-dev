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
  
	login(data)
  })

async function login(data) {
	try{
		const response = await api.post('/users/login', data)
		if (userInput.value === "" || keyInput.value === "") {
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


// }
