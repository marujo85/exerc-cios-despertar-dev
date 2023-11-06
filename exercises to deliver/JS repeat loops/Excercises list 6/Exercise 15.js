let a = Number(prompt ("Digite o lado A do seu triângulo"))
let b = Number(prompt ("Digite o lado B do seu triângulo"))
let c = Number(prompt ("Digite o lado C do seu triângulo"))


if(a==b && a==c && b==c){
	document.write("É um triângulo EQUILÁTERO")
} else if(a==b || a==c || b==c){
	document.write("É um triângulo ISÓSCELES")
} else if (a!=b && a==c && b==c) {
	document.write("É um triângulo ESCALENO")
}