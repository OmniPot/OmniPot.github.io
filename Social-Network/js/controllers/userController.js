socialNetwork.controller('userController', ['$scope', '$location', 'userData',
	function($scope, $location, userData, profileData) {
		var defaultCover = 'resources/defaultCover.jpg',
			defaultMale = 'resources/defaultMale.jpg',
			defaultFemale = 'resources/defaultFemale.jpg';

		$scope.profileData = {};
		$scope.editedProfileData = {};

		userData.getProfileData().$promise.then(
			function success(data) {
				$scope.profileData = data;

				$scope.profileData.profileImageData = $scope.formatBase64($scope.profileData.profileImageData) || defaultMale;
				$scope.profileData.coverImageData = $scope.formatBase64($scope.profileData.coverImageData) || defaultCover;
			},
			function error(error) {
				socialNetwork.noty.error('Error fetching user information.');
			});

		$scope.editProfile = function(editedProfileData) {
			$scope.editedProfileData.profileImageData = editedProfileData.profileImageData.base64;
			$scope.editedProfileData.coverImageData = editedProfileData.coverImageData.base64;

			userData.editProfileData(editedProfileData).$promise.then(
				function success(data) {
					socialNetwork.noty.success("Successfully edited profile information.");
					$location.path('/home');
				});
		}
	}
]);