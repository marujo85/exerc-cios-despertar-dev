const formNewUser = document.getElementById('form-new-user')

const nameInput = document.getElementById('username')
const emailInput = document.getElementById('email-login')
const passwordInput = document.getElementById('password-login')
const passwordSecInput = document.getElementById ('password-login-check')


async function validateForm(e) {
  let emailOK = false;
  let passwordOK = false;

  if (!emailInput.value) {
    console.log("Please, enter your e-mail address here")
  } else {
    console.log('E-mail ok')
    emailOK = true
  }

  if (!passwordInput.value) {
    document.getElementById('validationServerUsernameFeedback').innerHTML= 'Please enter your password'
  } else if ((passwordInput.value).length < 6) {
    document.getElementById('validationServerUsernameFeedback').innerHTML= 'Please, enter a password with more than 6 characters'
  } else if (passwordInput.value != passwordSecInput.value){
    document.getElementById('validationServerUsernameFeedback').innerHTML='Please, repeat the password correclty in both fields!'
  }
   else {
    console.log('Passwords OK')
    passwordOK = true
  }
  if (emailOK && passwordOK) {
    button = document.getElementById('sign-up')
    button.removeAttribute('disabled')
  }

}

nameInput.addEventListener('input', validateForm)
emailInput.addEventListener('input', validateForm)
passwordInput.addEventListener('input', validateForm)
passwordSecInput.addEventListener('input', validateForm)


formNewUser.addEventListener('submit', (e) => {
  e.preventDefault() // impedir comportamento padrão do submit

  const newUser = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  }

  addNewUser(newUser)
})

async function addNewUser(newUser) {
  try {
    const response = await api.post('/users/signup', newUser)

    if (response.status === 201) {
      location.href = "index.html"
    }
  } catch (error) {
    console.log('Erro ao cadastrar usuário', error)
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