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
        templateUrl: '/partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phone/:phoneId', {
        templateUrl: '/partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
	  when('/nigga/', {
		  templateUrl: '/partials/nigga.html'
	  }).	  
	  when('/products/', {
		  templateUrl: '/partials/products.html'
	  }).	  
	  when('/register/', {
		  templateUrl: '/partials/register.html'
	  }).
      otherwise({
        redirectTo: '/home/'
      });
      $locationProvider.html5Mode(true);
  }]);
