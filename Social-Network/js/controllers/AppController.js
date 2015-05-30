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
				userData.profileImageData = 'resources/images/default.gif';
			} else {
				userData.profileImageData = 'resources/images/default.gif';
			}
		}

		if (userData.coverImageData == null) {
			userData.coverImageData = 'resources/images/defaultCover.jpg';
		}

		return userData;
	}
});