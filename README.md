# Summary

A simple status page to debug a control system for a car. The point is to display continuosly updating state and highlight certain parameters you want to watch to be able to focus on them more easily. 

# Setup
- ensure that node is installed version >= 11.15
- install dependencies
`yarn`

# Run It
- `yarn dev`
- visit localhost:3333 in the browser
- in a second terminal run the test script
`yarn test-status-updates true`  --> sends updates once
or `yarn test-status-updates`  --> sends updates continuously

# Notes 
The /status endpoint takes in a flat object. For each key and value pair, it will display them, and update them as they change. It also displays the js falseyness of the value as a red or green circle. 
curl -d '{"key1":"value1","key2":"value2","key3":"value3","key4":"value4"}' -H "Content-Type: application/json" -X POST http://localhost:3333/status


If you have nested objects you can add a special endpoint for them, and add a function to unpack them and set them on the base object. 

ie: `{ 	
	foo: 'bar',
	nested: {
		'baz': 'qux'
	} 
}`

becomes:

`{ 	
	foo: 'bar',
	"nested.baz": "qux"
}`


With arrays, there is currently no good way to handle them. 

# TODO:
- add a way to handle arrays.
- add option to save values over time.
- add option to see the unique values -> the range of available values for a setting.
