socialNetwork.controller('loginController', ['$scope', '$location', 'userData',
	function($scope, $location, userData) {
		$scope.login = function(user) {
			userData.login(user)
				.$promise.then(
					function success(data) {
						socialNetwork.noty.success('Successfully logged in.')
						$location.path('/home')
					},
					function error(error) {
						socialNetwork.noty.error('Login failed. Please try again.');
					});
		};
	}
]);