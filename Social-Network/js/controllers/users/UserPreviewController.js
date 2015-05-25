socialNetwork.controller('UserPreviewController', function($scope, usersData, friendsData) {
	$scope.getUserPreview = function(username) {
		usersData.getUserPreview(username).then(
			function success(previewedUser) {
				previewedUser.data = $scope.checkForImagesData(previewedUser.data);
				$scope.canInviteUser = !previewedUser.data.isFriend && !previewedUser.data.hasPendingRequest;
				$scope.previewedUser = previewedUser.data;
				$scope.userPreviewShown = true;
			},
			function error(error) {
				socialNetwork.noty.error('Error fetching user preview information.');
			});
	}

	$scope.sendFriendRequest = function() {
		friendsData.sendFriendRequest($scope.userUsername).then(
			function success() {
				socialNetwork.noty.success('Friend request successfully sent.');
				$scope.getUserPreview($scope.userUsername);
			},
			function error(error) {
				socialNetwork.noty.error('Error sending friend request.');
			});
	}

	$scope.checkForImagesData = $scope.$parent.checkForImagesData;

	$scope.hideUserPreview = function() {
		$scope.userPreviewShown = false;
	}
});