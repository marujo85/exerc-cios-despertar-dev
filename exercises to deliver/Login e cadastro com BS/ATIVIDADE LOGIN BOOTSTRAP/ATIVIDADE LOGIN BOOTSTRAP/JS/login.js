const formLogin = document.getElementById('form-login')

const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password-login')

formLogin.addEventListener('submit', (e) => {
  e.preventDefault() // impedir comportamento padrão do submit
  console.log("Logging in")
  const data = {
    email: emailInput.value,
    password: passwordInput.value,
  }

  if (!emailInput.value) {
    setError(emailInput, "E-mail é obrigatório.")
  } else {
    setSuccess(emailInput)
  }

  if (!passwordInput.value) {
    setError(passwordInput, "Senha obrigatória.")
  } else if ((passwordInput.value).length < 6) {
    setError(passwordInput, 'A senha deve ter no mínimo 6 caracteres.')
  } else {
    setSuccess(passwordInput)
  }

  if (emailInput.value && (passwordInput.value).length >= 6) {
    login(data)
  }
})

async function login(data) {
  try {
    const response = await api.post('/users/login', data)

    if (response.status === 200) {
      const userData = response.data

      localStorage.setItem('userId', userData.userId)
			console.log("Login successful")
      location.href = 'listar-recados.html'
    }
  } catch (error) {
    console.log('Erro ao fazer login', error)
  }
}

function setError(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  small.textContent = message
  formControl.classList.remove('success')
  formControl.classList.add('error')
}

function setSuccess(input) {
  const formControl = input.parentElement

  formControl.classList.remove('error')
  formControl.classList.add('success')
}
