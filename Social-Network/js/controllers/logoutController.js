socialNetwork.controller('logoutController', ['$scope', '$location', 'userData',
	function($scope, $location, userData) {
		(function() {
			userData.logout().$promise.then(function() {
				socialNetwork.noty.success('Successfully logged out.');
				$location.path('/welcome');
			});
		})();
	}
]);