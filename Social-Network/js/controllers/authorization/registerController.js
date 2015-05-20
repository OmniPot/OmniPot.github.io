socialNetwork.controller('registerController', function($scope, $location, userData) {
	$scope.user = {};
	$scope.user.gender = 'Other';

	$scope.register = function(user) {
		userData.register(user).then(
			function success(data) {
				socialNetwork.noty.success('Successfully registered. You are now logged in.');
				$location.path('/home')
			},
			function error(error) {
				socialNetwork.noty.error('Registration failed. Please try again.');
			});
	};
});