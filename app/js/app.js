'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider', '$locationProvider', 
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/home/', {
        templateUrl: '/app/partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phone/:phoneId', {
        templateUrl: '/app/partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
	  when('/nigga/', {
		  templateUrl: '/app/partials/nigga.html'
	  }).	  
	  when('/products/', {
		  templateUrl: '/app/partials/products.html'
	  }).	  
	  when('/register/', {
		  templateUrl: '/app/partials/register.html'
	  }).
      otherwise({
        redirectTo: '/home/'
      });
      $locationProvider.html5Mode(true);
  }]);
