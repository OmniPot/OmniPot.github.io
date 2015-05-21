socialNetwork.controller('loggedInUserHeaderController', function($scope, profileData) {
	profileData.getProfileData().then(
		function success(loggedUserProfile) {
			loggedUserProfile.data = $scope.checkForImagesData(loggedUserProfile.data);
			$scope.loggedUserProfile = loggedUserProfile.data;
		},
		function error(error) {
			socialNetwork.noty.error('Error fetching user information.');
		});
});