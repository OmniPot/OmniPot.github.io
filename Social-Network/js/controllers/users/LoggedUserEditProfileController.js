socialNetwork.controller('LoggedUserEditProfileController',
	function($scope, $location, profileData) {
		$scope.getProfileData = function() {
			profileData.getProfileData().then(
				function success(profile) {
					profile.data = $scope.checkForImagesData(profile.data);
					$scope.editedProfileData = profile.data;
				},
				function error(error) {
					socialNetwork.noty.error('Error fetching user information.');
				});
		}

		$scope.getProfileData();

		$scope.editOwnProfile = function(editedData) {
			if (editedData.profileImageData) {
				editedData.profileImageData = $scope.formatImageString(editedData.profileImageData.base64) ||
					$scope.editedProfileData.profileImageData;
			}

			if (editedData.coverImageData) {
				editedData.coverImageData = $scope.formatImageString(editedData.coverImageData.base64) ||
					$scope.editedProfileData.coverImageData;
			}

			profileData.editProfileData(editedData).then(
				function success(result) {
					socialNetwork.noty.success("Successfully edited profile information.");
					$scope.getProfileData();
					$location.path('/home');
				},
				function error(error) {
					socialNetwork.noty.error("Error while editing profile information.");
				});
		}

		$scope.editPassword = function() {
			profileData.editPassword($scope.editedProfilePasswordData).then(
				function success(profile) {
					socialNetwork.noty.success("Successfully edited profile password.");
					$location.path('/home');
				},
				function error(error) {
					socialNetwork.noty.error("Error while editing profile password.");
				});
		}
	});