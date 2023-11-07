const product = {
	description: 'mouse',
	price: 90,
}




const notebook = {
	processor:'i7',
	memory: '16GB',
	price: 5000,
	hd: '1tb',
	ssd: '256GB'
}

console.log(notebook)


const student = {
	name: "Mirna",
	grade1: '7',
	grade2: '7',
}

const student1 = {
	name: "Bernardo",
	grade1: 9,
	grade2: 8
}

const mediaStudent = (student.grade1 + student.grade2) / 2
const mediaStudent1 = (student1.grade1 + student1.grade2) / 2
const mediaGroup = (mediaStudent + mediaStudent1) / 2

console.log(student, student1)

console.log(`A média do Bernardo é ${mediaStudent}`)
console.log(`A média da Mirna é ${mediaStudent1}`)
console.log(`A média da turma é ${mediaGroup}`)


/*exercício 4*/


const unemployed = [];
const employedOver2500 = [];
const employedUnder2500 = [];
let salary

let continuar = true;

while (continuar) {
	const name = prompt(`Informe o nome da pessoa:`);
	const age = Number(prompt(`Informe a idade da pessoa:`));


	if (confirm("Por acaso atualmente você está empregado")) {
		salary = Number(prompt(`Informe o salario da pessoa:`));
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
				salary,
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

console.log("Pessoas empregadas com salários maiores que 2500:");
for (const pessoa of employedOver2500) {
console.log(`Nome: ${pessoa.name}, Idade: ${pessoa.age}, Salário: ${pessoa.salary}`);
}

console.log("Pessoas empregadas com salários menores que 2500:");
for (const pessoa of employedUnder2500) {
console.log(`Nome: ${pessoa.name}, Idade: ${pessoa.age}, Salário: ${pessoa.salary}`);
}

console.log("Pessoas desempregadas:");
for (const pessoa of unemployed) {
console.log(`Nome: ${pessoa.name}, Idade: ${pessoa.age}`);
}