socialNetwork.controller('loginController', function($scope, $location, usersData) {
	$scope.login = function(user) {
		usersData.login(user).then(
			function success(data) {
				socialNetwork.noty.success('Successfully logged in.')
				$location.path('/home')
			},
			function error(error) {
				socialNetwork.noty.error('Login failed. Please try again.');
			});
	};
});