function mediaAluno(notas, metodo){
	const [nota1, nota2, nota3] = notas

	if (metodo === "A")
	return (nota1 + nota2 + nota3) / 3

	if (metodo === "P")
	return (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10

}

document.write(`Para as notas: 9, 4 e 5 a média <strong>aritmética</strong> é: ${mediaAluno([9, 4, 5], 'A')}</br>`)
document.write(`Para as mesmas notas, a média <strong>ponderada</strong> é: ${mediaAluno([9, 4, 5], 'P')}`)