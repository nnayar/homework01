var listenport = 3000;   											//TCP listening port

var express = require('express'),
	app = express(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	random = require('randgen'),
	madlibGenerator =  require('madlibs'),
	randomDataProvider = require('random-data-provider'),
	stochastic = require('stochastic');
	
// var provisioningTool = require('./controller/controller.js');

// app.use(logger('combined'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.set('view engine', 'ejs');

// Define App routes

//Hello World
app.get('/', function (req, res) {
  res.send('Hello World! Let do some Madlibs');
});

app.get('/createMadlib', function (req, res) {
	var randomAdjective = madlibGenerator.adjective();
	var randomNoun = madlibGenerator.noun();
	var randomVerb = madlibGenerator.verb();
	var randomPlace = madlibGenerator.city();
	var randomPerson = madlibGenerator.fullName();
	var randomVehicleName = randomDataProvider.getRandomData().vehicle;
	var story = 'Once upon a time there was a ' + randomAdjective + ' ' + randomNoun + '. It was really ' + randomAdjective + '. It liked to ' + randomVerb + ' all day. One day, it went to ' + randomPlace + ' to meet '+ randomPerson + '. To get there, it rode in a ' + randomVehicleName + ', but on the way there, the ' + randomVehicleName + ' crashed.  It had to walk the rest of the way.'
	res.send('Hello World! Let do some Madlibs: ' + story);
});


// Need to update this
// app.get('/analyse', provisioningTool.readValidateOrg);
// 
// For receiving data from 
// app.put();
// 
// app.get('/dashboard', provisioningTool.displayNetworks);

app.listen(listenport, function(err) {
	if (err) return console.log(err);
	console.log("Meraki presence API receiver listening on port " + listenport);
});
