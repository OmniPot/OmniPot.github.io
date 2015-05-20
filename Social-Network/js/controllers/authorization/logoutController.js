socialNetwork.controller('logoutController', function($scope, $location, userData) {
	(function() {
		userData.logout().then(
			function() {
				socialNetwork.noty.success('Successfully logged out.');
				$location.path('/welcome');
			});
	})();
});