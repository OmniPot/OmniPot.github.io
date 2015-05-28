socialNetwork.controller('LoggedUserHeaderController', function($scope, $rootScope, profileData) {
	$scope.getProfileData = function() {
		profileData.getProfileData().then(
			function success(loggedUserProfile) {
				loggedUserProfile.data = $scope.checkForImagesData(loggedUserProfile.data);
				$rootScope.loggedUserHeaderData = loggedUserProfile.data;
			},
			function error(error) {
				socialNetwork.noty.error('Error fetching user information.');
			});
	}

	$scope.getProfileData();
});