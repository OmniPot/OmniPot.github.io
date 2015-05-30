socialNetwork.controller('LogoutController', function($scope, $rootScope, $location, usersData) {
	$scope.logout = function() {
		usersData.logout().then(
			function success() {
				socialNetwork.noty.success('Successfully logged out.');
				$location.path('/welcome');
			},
			function error() {
				$location.path('/welcome');
			});
	};

	$scope.logout();
	$rootScope.loggedUserHeaderData = {};
	$scope.authentication.clearUserData();
});