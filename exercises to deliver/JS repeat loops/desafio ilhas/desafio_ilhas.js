let iniciar = confirm("Deseja realizar um saque?")
while (iniciar){

const saque = parseInt(prompt("Insira o valor do saque"))

let resto

let nota50 = parseInt(saque/50)
resto = saque % 50

let notas10 = parseInt(resto/10)
resto = resto % 10

let notas5 = parseInt(resto/5)
resto = resto % 5

let notas1 = resto

console.log(`GC$ 50,00 -> ${nota50}
GC$ 10,00 -> ${notas10}
GC$ 5,00 -> ${notas5}
GC$ 1,00 ->  ${notas1}`)

document.write(`Resultado do saque de R$${saque}`)
document.write (`${resultado}`)

iniciar = confirm(`Deseja realizar mais um saque?`)
}
