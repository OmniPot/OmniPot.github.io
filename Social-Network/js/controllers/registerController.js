socialNetwork.controller('registerController', ['$scope', '$location', 'userData',
	function($scope, $location, userData) {
		$scope.register = function(user) {
			userData.register(user)
				.$promise.then(
					function success(data) {
						socialNetwork.noty.success('Successfully registered. You are now logged in.');
						$location.path('/home')
					},
					function error(error) {
						socialNetwork.noty.error('Registration failed. Please try again.');
					});
		};

	}
]);