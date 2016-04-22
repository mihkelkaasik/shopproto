'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
			$scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
  
/*
app1.controller('userCtrl', function($scope) {
	
	$scope.user = [{
		userfName: "Mihkel",
		userlName: "Kaasik",
		userPassword: "lolyolo"
	}];
	
	$scope.saveUser = function(userInfo) {
		if($scope.userForm.$valid){
			$scope.user.push({
				userfName: userInfo.userfName,
				userlName: userInfo.userlName,
				userPassword: user.userPassword
			});
			console.log("User saved")
		}
		else {
			console.log("User not saved");
		}
	}
});
*/