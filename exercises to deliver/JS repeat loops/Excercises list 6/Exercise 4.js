let days = Number(prompt("Digite um número de 1 a 7"))

switch (days) {
	case 1:
	document.write("O dia correspondente é Domingo");
		break;
	case 2:
        document.write(`O dia correspondente é Segunda`)
    break;
    case 3:
        document.write(`O dia correspondente é Terça`)
    break;
    case 4:
        document.write(`O dia correspondente é Quarta`)
    break;
    case 5:
        document.write(`O dia correspondente é Quinta`)
	break
	case 6:
        document.write(`O dia correspondente é Sexta`)
	break;

	case 7:
        document.write(`O dia correspondente é Sábado`)
	break;

	default:
		alert(`Escreva um número válido`)
		break;
}
