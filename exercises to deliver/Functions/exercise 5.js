function perfect(valueTest){
		if(valueTest <= 1)
		return false;
	
		let diviserSum = 1;
	
		for(let i = 2; i < valueTest; i++){
			if (valueTest % i === 0)
			diviserSum += i;
		}
		return diviserSum === valueTest
	}
	console.log(perfect(28))