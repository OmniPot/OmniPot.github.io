socialNetwork.controller('LoginController', function($scope, $rootScope, $location, usersData) {
	$scope.login = function(user) {
		usersData.login(user).then(
			function success(userProfile) {
				socialNetwork.noty.success('Successfully logged in.')
				$location.path('/home')
			},
			function error(error) {
				socialNetwork.noty.error('Login failed. Please try again.');
			});
	};
});