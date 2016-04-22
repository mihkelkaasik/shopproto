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
        templateUrl: '/angular-phonecat/app/partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phone/:phoneId', {
        templateUrl: '/angular-phonecat/app/partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
	  when('/nigga/', {
		  templateUrl: '/angular-phonecat/app/partials/nigga.html'
	  }).	  
	  when('/products/', {
		  templateUrl: '/angular-phonecat/app/partials/products.html'
	  }).	  
	  when('/register/', {
		  templateUrl: '/angular-phonecat/app/partials/register.html'
	  }).
      otherwise({
        redirectTo: '/home/'
      });
      $locationProvider.html5Mode(true);
  }]);
