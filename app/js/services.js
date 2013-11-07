'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var earthdawnServices = angular.module('earthdawn.services', []);

	earthdawnServices.value('version', '0.1');
	
	earthdawnServices.factory('attPoints', function() {
		var points = 66;
		var basePoints = 66;
		var myAttPointsService = {};
		
		myAttPointsService.compute = function(char) {
			compute(char.dex);
			compute(char.for);
			compute(char.con);
			compute(char.per);
			compute(char.vol);
			compute(char.cha);
			points = basePoints;
			basePoints= 66;
		};
		
		myAttPointsService.getPoints = function() {
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
		}

		
		return myAttPointsService;
	});
