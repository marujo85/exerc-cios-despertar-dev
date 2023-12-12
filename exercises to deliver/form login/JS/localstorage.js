const nome = document.getElementById('name');
const avatar = document.getElementById('avatar');
const senha = document.getElementById('key');
const email = document.getElementById('email');
const errorSpace = document.querySelector('#error-space');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (!nome.value || !avatar.value || !senha.value || !email.value) {
		errorSpace.innerHTML = `<p class="form-control error">Preencha todos os campos para continuar!</p>`;
	} else {
		const nomeValue = nome.value;
		const avatarValue = avatar.value;
		const senhaValue = senha.value;
		const emailValue = email.value;
		const userId = Date.now().toString(36).toUpperCase()
		
		const newUser = {
			nome: nomeValue,
			avatar: avatarValue,
			senha: senhaValue,
			email: emailValue
		};

		
		localStorage.setItem(`user_${userId}`, JSON.stringify(newUser));

		alert('Usuário cadastrado com sucesso');

		nome.value = '';
		avatar.value = '';
		senha.value = '';
		email.value = '';
		
	}
});