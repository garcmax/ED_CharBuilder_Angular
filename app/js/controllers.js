'use strict';

/* Controllers */

var earthdawnController = angular.module('earthdawn.controllers', []);
  
  earthdawnController.controller('DisciplinesController', ['$scope', '$http', function($scope, $http) {
  	$http.get('resources/disciplines/disciplines.json').success(function(data) {
    	$scope.disciplines = data;
  	});
  }]);
  
  earthdawnController.controller('RacesController', ['$scope', '$http', 'raceService', function($scope, $http, raceService) {
  	$http.get('resources/races/races.json').success(function(data) {
    	$scope.races = data;
  	});
  	$scope.$watch(
  		function() {
  			return $scope.raceId;
  		},
  		function(newVal, oldVal) {
	      	raceService.setRaceId(newVal);
		});
  }]);
  
  earthdawnController.controller('AttributsController', ['$scope', 'attributsService', 'raceService', function($scope, attributsService, raceService) {
  	$scope.points = attributsService.getPoints();
  	$scope.$watch(
  		function() {
  			return raceService.getRaceId();
  		},
  		function(newVal, oldVal) {
			$scope.char = raceService.getAttributeRequirements();
			attributsService.compute($scope.char);
		  	$scope.points = attributsService.getPoints();
		});
		
	$scope.compute = function() {
		console.log("attributs ont changés");
		attributsService.compute($scope.char);
	  	$scope.points = attributsService.getPoints();
	}
  }]);

