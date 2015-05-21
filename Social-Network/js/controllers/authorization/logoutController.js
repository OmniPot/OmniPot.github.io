socialNetwork.controller('logoutController', function($scope, $location, usersData) {
	(function() {
		usersData.logout().then(
			function() {
				socialNetwork.noty.success('Successfully logged out.');
				$location.path('/welcome');
			});
	})();
});