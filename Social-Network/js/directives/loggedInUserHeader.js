socialNetwork.directive('loggedInUserHeader', function () {
	return {
		restrict: 'A',
		templateUrl: 'templates/header.html',
		controller: 'loggedInHeaderController'
	}
});