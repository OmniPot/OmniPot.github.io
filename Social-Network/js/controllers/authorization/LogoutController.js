socialNetwork.controller('LogoutController', function($scope, $rootScope, $location, usersData) {
	$scope.logout = function() {
		usersData.logout().then(
			function success() {
				socialNetwork.noty.success('Successfully logged out.');
				$rootScope.loggedUserProfile = {};
				$location.path('/welcome');
			});
	};

	$scope.logout();
});