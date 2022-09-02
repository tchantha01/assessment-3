console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Successfully submitted form')
	console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function imgAlert(event)  {
	
	alert('That tickles!')
	
}

let rubberDucky = document.querySelector('img')

rubberDucky.addEventListener('mouseover', imgAlert)