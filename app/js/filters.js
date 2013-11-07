'use strict';

/* Filters */

var earthdawnFilter = angular.module('earthdawn.filters', []);
  earthdawnFilter.filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
  
  earthdawnFilter.filter('raceFilter', function() {
  	return function(name) {
  		name = name.toUpperCase();
  		return name;
  	};
  });
