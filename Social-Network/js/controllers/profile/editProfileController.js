socialNetwork.controller('editProfileController', function($scope, $location, profileData) {	
	$scope.editOwnProfile = function(editedProfileData) {
		if (editedProfileData.profileImageData) {
			$scope.editedProfileData.profileImageData =
				$scope.formatImageString(editedProfileData.profileImageData.base64);
		}
		if (editedProfileData.coverImageData) {
			$scope.editedProfileData.coverImageData =
				$scope.formatImageString(editedProfileData.coverImageData.base64);
		}
		profileData.editProfileData(editedProfileData).then(
			function success() {
				socialNetwork.noty.success("Successfully edited profile information.");
				$location.path('/home');
			});
	}
});