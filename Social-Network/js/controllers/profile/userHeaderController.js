socialNetwork.controller('userHeaderController', function($scope, $routeParams, userData) {
	userData.getUserData($routeParams.username).then(
		function success (userProfileData) {
			$scope.userProfileData = userProfileData;
		}, function error (error) {
			socialNetwork.noty.error("Unable to fetch user profile data.");
		});
});