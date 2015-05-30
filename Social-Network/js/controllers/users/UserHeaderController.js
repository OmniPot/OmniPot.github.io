socialNetwork.controller('UserHeaderController', function($scope, $routeParams, usersData, friendsData) {
	var currentUser = $scope.authentication.getUserData().username;

	$scope.getUserData = function(wallOwnerUsername) {
		usersData.getUserData(wallOwnerUsername).then(
			function success(wallOwnerProfile) {
				wallOwnerProfile.data = $scope.checkForImagesData(wallOwnerProfile.data);

				$scope.postOptionAvailable = wallOwnerProfile.data.isFriend ||
					wallOwnerProfile.data.username == currentUser;

				$scope.friendsPreviewAvailable = $scope.postOptionAvailable;

				$scope.isOwnWall = currentUser == wallOwnerProfile.data.username;

				$scope.wallOwner = wallOwnerProfile.data;
			},
			function error(error) {
				socialNetwork.noty.error("Unable to fetch user profile data.");
			});
	}

	$scope.sendFriendRequest = function() {
		friendsData.sendFriendRequest($scope.wallOwner.username).then(
			function success() {
				socialNetwork.noty.success('Friend request successfully sent.');
				$scope.getUserData($scope.wallOwner.username);
			},
			function error(error) {
				socialNetwork.noty.error('Error sending friend request.');
			});
	}

	$scope.getUserData($routeParams.username);
});