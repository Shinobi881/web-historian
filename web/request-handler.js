var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpersFile = require('./http-helpers');
// require more modules/folders here!
var fs = require('fs');
var messages = [];

exports.handleRequest = function (req, res) {
  
  var returnValue = null;

	// console.log('req', req.url);


	var requestURL = req.url;


  res.end(archive.paths.list);
};

	var returnForm = {
		type: 'returnForm',
		name: null
	}
	
	var actions = {
	 'GET': function(request, response){
	 		// console.log('body', body);
	 		fs.createReadStream('./public/index.html').pipe(response)
	    helpersFile.sendResponse(returnForm, {});
	  },
	  'POST': function(request, response){
    	console.log('WE ARE IN THE POST. HELP!')
    	helpersFile.collectData(request, function(message){
      messages.push(message);
      helpersFile.sendResponse(returnForm, {}, 201);
    	});
    },
   'OPTIONS': function(request, response){
    	helpersFile.sendResponse(response, null);
		}	
	}

exports.requestHandler = helpersFile.makeActionHandler(actions);