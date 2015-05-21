socialNetwork.controller('appController', function($scope, authentication) {
	$scope.authenticated = function() {
		return authentication.isLoggedIn();
	}

	$scope.formatImageString = function(data) {
		return 'data:image/jpeg;base64,' + data;
	}

	$scope.checkForImagesData = function(userData) {
		if (userData.profileImageData == null) {
			if (userData.gender == 'Male' || userData.gender == 0) {
				userData.profileImageData = 'resources/defaultMale.jpg';
			} else {
				userData.profileImageData = 'resources/defaultFemale.jpg';
			}
		}

		if (userData.coverImageData == null) {
			userData.coverImageData = 'resources/defaultCover.jpg';
		}

		return userData;
	}
});