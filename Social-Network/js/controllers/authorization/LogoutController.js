socialNetwork.controller('LogoutController', function($scope, $location, usersData) {
	$scope.logout = function() {
		usersData.logout().then(
			function success() {
				socialNetwork.noty.success('Successfully logged out.');
				$location.path('/welcome');
			});
	};

	$scope.logout();
});