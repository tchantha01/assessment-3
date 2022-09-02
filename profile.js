

let favColor = document.querySelector('#color')
let favPlace = document.querySelector('#place')
let favRitual = document.querySelector('#ritual')

function colorAlert(event)  {
	
	alert('RED')
	
}

favColor.addEventListener('click', colorAlert)

function placeAlert(event)  {
	
	alert('Being home')
	
}
favPlace.addEventListener('click', placeAlert)

function ritualAlert(event)  {
	
	alert('First thing in morning, I check on my kids')
	
}

favRitual.addEventListener('click', ritualAlert)