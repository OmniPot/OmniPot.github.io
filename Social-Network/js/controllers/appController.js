socialNetwork.controller('appController', function($scope, $location, authentication) {
	$scope.authenticated = function () {
		return authentication.isLoggedIn();
	}

	$scope.formatImageString = function(data) {
		return 'data:image/jpeg;base64,' + data;
	}
});