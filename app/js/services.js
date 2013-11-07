'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var earthdawnServices = angular.module('earthdawn.services', []);

	earthdawnServices.value('version', '0.1');
	
	earthdawnServices.factory('attributsService', function() {
		var points = 66;
		var basePoints = 66;
		var myAttributsService = {};
		
		myAttributsService.compute = function(char) {
		console.log("attributsService method compute");
			compute(char.dex);
			compute(char.for);
			compute(char.con);
			compute(char.per);
			compute(char.vol);
			compute(char.cha);
			points = basePoints;
			basePoints= 66;
		};
		
		myAttributsService.getPoints = function() {
			console.log("attributsService method getPoints = " + points);
			return points;
		};

		function compute(att) {
			switch(true) {
			case (att == 1):
				basePoints = basePoints;
				break;
			case (att == 12):
				basePoints = basePoints - 8;
				break;
			case (att == 13):
				basePoints = basePoints - 10;
				break;
			case (att == 14):
				basePoints = basePoints - 13;
				break;
			case (att == 15):
				basePoints = basePoints - 16;
				break;
			case (att == 16):
				basePoints = basePoints - 19;
				break;
			case (att == 17):
				basePoints = basePoints - 21;
				break;
			case (att == 18):
				basePoints = basePoints - 23;
				break;
			default :
				basePoints = basePoints - (att - 5);
				break;
			}			
		};

		
		return myAttributsService;
	});
	
	earthdawnServices.factory('raceService', function() {
		var myRaceService = {};
		var raceId = 0;
		var char = {};
		
		myRaceService.setRaceId = function(newRaceId) {
			console.log(newRaceId);
			raceId = newRaceId;
		};
		
		myRaceService.getRaceId = function() {
			return raceId;
		};
		
		myRaceService.getAttributeRequirements = function() {
		switch(raceId) {
			case (3):
				console.log("je suis un obsidien");
				char.dex = 5;
				char.for = 15;
				char.for.min = 15;
				char.con = 5;
				char.per = 5;
				char.vol = 5
				char.cha = 5;
			case (5):
			//force minimum de 11
				break;
			case (6):
			console.log("je suis un troll");
				char.dex = 5;
				char.for = 11;
				char.for.min = 11;
				char.con = 11;
				char.per = 5;
				char.vol = 5
				char.cha = 5;
				break;
			default :
				char.dex = 5;
				char.for = 5;
				char.for.min = 2;
				char.con = 5;
				char.per = 5;
				char.vol = 5
				char.cha = 5;
				break;
			}			
			return char;
		};
		
		return myRaceService;
	});
