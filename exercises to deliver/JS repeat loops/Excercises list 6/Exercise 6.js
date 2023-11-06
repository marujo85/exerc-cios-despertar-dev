let counter = 0

 for (let c = 0; c <= 60; c++){
	if (c %2 != 0){
		document.write(` ${c}`)
		counter++
	}
}
document.write (`</br>Contador: ${counter}`)