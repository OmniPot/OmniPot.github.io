socialNetwork.controller('UserHeaderController', function($scope, $routeParams, usersData) {
	var currentUser = $scope.authentication.getUserData().username;

	$scope.getUserData = function(currUserUsername) {
		usersData.getUserData(currUserUsername).then(
			function success(wallOwnerProfile) {
				wallOwnerProfile.data = $scope.checkForImagesData(wallOwnerProfile.data);

				$scope.postOptionAvailable = wallOwnerProfile.data.isFriend ||
					wallOwnerProfile.data.username == currentUser;

				$scope.friendsPreviewAvailable = wallOwnerProfile.data.isFriend;
				
				$scope.wallOwner = wallOwnerProfile.data;
			},
			function error(error) {
				socialNetwork.noty.error("Unable to fetch user profile data.");
			});
	}

	$scope.getUserData($routeParams.username);
});