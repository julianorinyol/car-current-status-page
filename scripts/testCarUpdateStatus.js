
const axios = require('axios');
const port = 3333
const host = `http://localhost:${port}`

const statusEndpoint = `${host}/status`
const carStatusEndpoint = `${host}/carstatus`

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const range = (total, start) => {
 return [...Array(total + start).keys()].slice(start)
}

const postJoystickStatusUpdate = () => {
	const body = {	
		"joystick.buttons.a": getRandomInt(2),
		"joystick.buttons.b": getRandomInt(2),
		"joystick.buttons.c": getRandomInt(2),
		"joystick.buttons.d": getRandomInt(2),
	}

	return post(statusEndpoint, body)
}


const post = (endpoint, body) => {
	return axios.post(endpoint, body)
	.then(function (response) {
	  console.log(`posting data to ${endpoint} was successful.`)
	})
	.catch(function (error) {
	  console.error(`Error posting to ${endpoint}`, body, error, );
	  throw error 
	});	
}

const postCarStatusUpdate = () => {
	const body = {	
		cruiseState: {
		  "enabled": false,
		  "available": false,
		  "speedOffset": 0.0,
		  "speed": 0.0,
		  "standstill": false
		}
	}

	// just generating some nice test data... 
	range(20, 1).forEach(num => {
		body[`test item key ${num}`] = 	getRandomInt(1000)
	})

	// generating boolean basically either 1 or 0, makes it easy to test the falsey circle styles
	range(20, 11).forEach(num => {
		body[`test item key ${num}`] = 	getRandomInt(2)
	})
	

	return post(carStatusEndpoint, body)
}


// call it like: yarn test-status-updates true     - to send the updates just once. 
if(process.argv.length === 3) {
	postCarStatusUpdate()
	postJoystickStatusUpdate()
} else {
	setInterval(postJoystickStatusUpdate, 300);
	setInterval(postCarStatusUpdate, 500);		
}
