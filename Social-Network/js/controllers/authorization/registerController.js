socialNetwork.controller('registerController', function($scope, $location, usersData) {
	$scope.user = {};

	$scope.register = function(user) {
		usersData.register(user).then(
			function success(data) {
				socialNetwork.noty.success('Successfully registered. You are now logged in.');
				$location.path('/home')
			},
			function error(error) {
				socialNetwork.noty.error('Registration failed. Please try again.');
			});
	};
});