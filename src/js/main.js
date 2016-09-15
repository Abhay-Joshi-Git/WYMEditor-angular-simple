var app = angular.module('app', []);

	//console.log(app);
	app.controller('main', function($scope) {
		$scope.htmldata = '<h1>test</h1>';
		console.log('$scope.htmldata', $scope.htmldata);
	});

