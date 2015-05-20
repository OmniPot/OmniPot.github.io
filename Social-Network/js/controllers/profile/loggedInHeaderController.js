socialNetwork.controller('loggedInHeaderController', function($scope, profileData) {
	$scope.profileData = {};
	$scope.editedProfileData = {};

	profileData.getProfileData().then(
		function success(profile) {
			$scope.profileData = profile.data;
			$scope.editedProfileData = profile.data;
		},
		function error(error) {
			socialNetwork.noty.error('Error fetching user information.');
		});
});