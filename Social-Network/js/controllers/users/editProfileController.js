socialNetwork.controller('editProfileController', function($scope, $rootScope, $location, profileData) {
	profileData.getProfileData().then(
		function success(profile) {
			$scope.editedProfileData = profile.data;
		},
		function error(error) {
			socialNetwork.noty.error('Error fetching user information.');
		});

	$scope.editOwnProfile = function(newData) {
		profileData.editProfileData(newData).then(
			function success(data) {
				socialNetwork.noty.success("Successfully edited profile information.");
				$location.path('/home');
			}, function error(error) {
				socialNetwork.noty.error("Error while editing profile information.");
			});
	}
});