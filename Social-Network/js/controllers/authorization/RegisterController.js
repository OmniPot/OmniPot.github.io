socialNetwork.controller('RegisterController', function($scope, $location, usersData) {
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