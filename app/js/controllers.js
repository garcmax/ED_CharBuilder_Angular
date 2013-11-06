'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', function($scope, $http) {
	  	$http.get('resources/disciplines/disciplines.json').success(function(data) {
    	$scope.disc = data;
  	});	
  })
  .controller('MyCtrl2', [function() {

  }]);
  
  function DisciplinesController($scope, $http) {
  	$http.get('resources/disciplines/disciplines.json').success(function(data) {
    	$scope.disciplines = data;
  	});
  }
  
  function RacesController($scope, $http) {
  	$http.get('resources/races/races.json').success(function(data) {
    	$scope.races = data;
  	});
  }

