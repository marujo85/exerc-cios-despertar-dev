
function takeName(){
	const userName = prompt('Write your name, please')
	document.querySelector('#text1').innerText =`Hi ${userName}! your website is dynamic now`

}

let increment = 0
function incrementing() {
	increment ++
	document.querySelector('#text-counter').innerText = `counter has ${increment} clicks`
}

function zeroCounter(){
	inc = 0
	document.querySelector('#text-counter').innerHTML = ''
}
