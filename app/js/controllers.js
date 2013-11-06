'use strict';

/* Controllers */

var earthdawnController = angular.module('earthdawn.controllers', []);
  
  earthdawnController.controller('DisciplinesController', ['$scope', '$http', function($scope, $http) {
  	$http.get('resources/disciplines/disciplines.json').success(function(data) {
    	$scope.disciplines = data;
  	});
  }]);
  
  earthdawnController.controller('RacesController', ['$scope', '$http', function($scope, $http) {
  	$http.get('resources/races/races.json').success(function(data) {
    	$scope.races = data;
  	});
  }]);
  
  earthdawnController.controller('AttributsController', ['$scope', 'attPoints', function($scope, attPoints) {  	
	$scope.char = {};
	$scope.char.dex = 5;
	$scope.char.for = 5;
	$scope.char.con = 5;
	$scope.char.per = 5;
	$scope.char.vol = 5;
	$scope.char.cha = 5;
	$scope.attPoints = attPoints;
  }]);

