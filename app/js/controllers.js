'use strict';

/* Controllers */

angular.module('myApp').config(function($routeProvider) {
	$routeProvider
		.when('/view1', {
		controller: 'Controller1',
		templateUrl: 'partials/view1.html',
		})
			.when('/view2', {
		controller: 'Controller2',
		templateUrl: 'partials/view2.html',
		});
});
  /* .controller('FinanceController', [function($scope) {
		$scope.salary = 0;
		$scope.percentage = 0;
		$scope.result = function() {
		return $scope.salary * $scope.percentage * 0.01;
		};
	}]); */