let studyShift = prompt("Digite qual o horário que você estuda utilizando M para matutino, V para vespertino e N para noturno")

switch (studyShift) {
	case "M":
		alert("Bom dia!")
		break;

	case 'V':
			alert(`Boa tarde!`)
		break;

	case 'N':
			alert(`Boa noite!`)
		break;
	default:
			alert(`Digite uma letra válida MAIÚSCULA.`)
			break;
	}
	