socialNetwork.controller('AppController', function($scope, $rootScope, authentication) {
	$scope.authentication = authentication;
	
	$scope.formatImageString = function(data) {
		if (data) {
			return 'data:image/jpeg;base64,' + data;
		}
		return null;
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