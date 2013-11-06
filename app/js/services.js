'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var earthdawnServices = angular.module('earthdawn.services', []);

	earthdawnServices.value('version', '0.1');
	
	earthdawnServices.factory('attPoints', function() {
		var points = 66;
		var myAttPointsService = {};
		
		myAttPointsService.compute = function(char) {
			console.log('compute: ' + char);
			if (char.dex > 2 && char.dex < 12) {
				
			}
		};
		
		myAttPointsService.getPoints = function() {
			console.log('getPoints: ' + points);
			return points;
		};
		
		return myAttPointsService;
	});
