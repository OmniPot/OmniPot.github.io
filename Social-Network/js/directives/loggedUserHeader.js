socialNetwork.directive('loggedUserHeader', function () {
	return {
		restrict: 'A',
		templateUrl: 'templates/loggedUserHeader.html',
		controller: 'LoggedUserHeaderController'
	}
});