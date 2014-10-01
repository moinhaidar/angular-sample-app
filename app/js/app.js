'use strict';

// Declare app level module which depends on filters, and services
// Initialize our app and register the modules on which it depends
angular.module('F1FeederApp', [
  'ngRoute',
  'F1FeederApp.services',
  'F1FeederApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.
	when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
	when("/drivers/:id", {templateUrl: "partials/driver.html", controller: "driverController"}).
	otherwise({redirectTo: '/drivers'});
	
}]);