let num = Number(prompt("Digite um número para verificar se ele é ou não PRIMO"))
let prime = true

if (num >= 0 && !isNaN(num) && Number.isInteger(num)) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        prime = false;
        break;
    }
  }
} else {
  alert("Número inválido --- ERRO! ")
}

if (num >= 0 && !isNaN(num) && Number.isInteger(num)) {
    if (prime && num != 1 && num != 0) {
      document.write(`${num} é um número primo.`)
    } else {
      document.write(`${num} não é um número primo.`)
    }
}