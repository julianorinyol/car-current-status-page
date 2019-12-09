
const axios = require('axios');
const port = 3333
const host = `http://localhost:${port}`

const endpoint = `${host}/carstatus`



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const postStatusUpdate = () => {
	const postBody = {
		cruiseState: {
		  "enabled": false,
		  "available": false,
		  "speedOffset": 0.0,
		  "speed": 0.0,
		  "standstill": false
		},
		"test item key 1": getRandomInt(1000),
		"test item key 2": getRandomInt(1000),
		"test item key 3": getRandomInt(2),
		"test item key 4": getRandomInt(2),
		"test item key 5": 0,
		"test item key 6": 0,
		"test item key 7": getRandomInt(1000),
		"test item key 8": getRandomInt(1000),
		"test item key 9": getRandomInt(2),
		"test item key 10": getRandomInt(2),
		"test item key 11": 0,
		"test item key 12": 0,
		"test item key 13": getRandomInt(1000),
		"test item key 14": getRandomInt(1000),
		"test item key 15": getRandomInt(2),
		"test item key 16": getRandomInt(2),
		"test item key 17": 0,
		"test item key 18": 0,
		"test item key 19": getRandomInt(1000),
		"test item key 20": getRandomInt(1000),
		"test item key 21": getRandomInt(2),
		"test item key 22": getRandomInt(2),
		"test item key 23": 0,
		"test item key 24": 0,
		"test item key 25": getRandomInt(1000),
		"test item key 26": getRandomInt(1000),
		"test item key 27": getRandomInt(2),
		"test item key 28": getRandomInt(2),
		"test item key 29": 0,
		"test item key 30": 0,
		"test item key 31": getRandomInt(1000),
		"test item key 32": getRandomInt(1000),
		"test item key 33": getRandomInt(2),
		"test item key 34": getRandomInt(2),
		"test item key 35": 0,
		"test item key 36": 0,
		"test item key 37": getRandomInt(1000),
		"test item key 38": getRandomInt(1000),
		"test item key 39": getRandomInt(2),
		"test item key 40": getRandomInt(2),
		"test item key 41": 0,
		"test item key 42": 0,
		"test item key 43": getRandomInt(1000),
		"test item key 44": getRandomInt(1000),
		"test item key 45": getRandomInt(2),
		"test item key 46": getRandomInt(2),
		"test item key 47": 0,
		"test item key 48": 0,

	}	
	return axios.post(endpoint, postBody)
	.then(function (response) {
	  console.log(response.data);
	})
	.catch(function (error) {
	  console.log(error);
	});	
}

// setInterval(postStatusUpdate, 500);
postStatusUpdate()