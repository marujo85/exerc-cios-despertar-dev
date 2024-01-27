(() => {
	'use strict';
  
	const form = document.getElementById('form-new-user');
  
	function checkPasswordMatch() {
	  const password1 = document.getElementById('password-login').value;
	  const password2 = document.getElementById('password-login-check').value;
  
	  
	  if (password1 !== password2) {
		document.getElementById('password-login').innerHTML = 'Passwords do not match.';
		return false;
	  } else {
		document.getElementById('password-login').innerHTML = 'Password valid!';
		return true;
	  }
	}
  
	form.addEventListener('submit', event => {
	  if (!form.checkValidity() || !checkPasswordMatch()) {
		event.preventDefault();
		event.stopPropagation();
	  }
  
	  form.classList.add('was-validated');
	}, false);
  })();
  