const age = Number(prompt("Digite a idade do candidato a doador"))

if (age >= 18 && age <= 67) {
    document.write("A pessoa pode doar sangue!")
} else {
    document.write("A pessoa NÃO pode doar sangue!")
}