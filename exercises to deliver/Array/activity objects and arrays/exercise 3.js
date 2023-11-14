const unemployed = [];
const employedOver2500 = [];
const employedUnder2500 = [];
let salary

let continuar = true;

while (continuar) {
	const name = prompt(`Informe o nome da pessoa:`);
	const age = Number(prompt(`Informe a idade da pessoa:`));


	if (confirm("Você está empregado atualmente? ")) {
		salary = Number(prompt(`Informe o seu salario:`));
		if (salary >= 2500) {
			employedOver2500.push({
				name,
				age,
				salary,
			})
		} else if (salary < 2500) {
			employedUnder2500.push({
				name,
				age,
				salary
			})
		}
	} else {
		unemployed.push({
			name,
			age,
		})
	}


	if (!confirm("Voce deseja continuar?")) {
		continuar = false
		break
	}
}

document.write("<strong>Pessoas empregadas com salários maiores que 2500:</strong></br>");
for (const pessoa of employedOver2500) {
document.write(`Nome: ${pessoa.name}, Idade: ${pessoa.age}, Salário: ${pessoa.salary} </br>`);
}

document.write("<strong>Pessoas empregadas com salários menores que 2500:</strong></br>");
for (const pessoa of employedUnder2500) {
document.write(`Nome: ${pessoa.name}, Idade: ${pessoa.age}, Salário: ${pessoa.salary}</br>`);
}

document.write("<strong>Pessoas desempregadas:</strong></br>`");
for (const pessoa of unemployed) {
document.write(`Nome: ${pessoa.name}, Idade: ${pessoa.age}</br>`);
}
