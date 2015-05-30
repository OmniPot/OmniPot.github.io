socialNetwork.controller('UserPreviewController', function($scope, $timeout, usersData, friendsData) {
	$scope.hideTime = 1500;

	$scope.getUserPreview = function(event) {
		$scope.showUserPreview(event);
		usersData.getUserPreview($scope.userUsername).then(
			function success(previewedUser) {
				previewedUser.data = $scope.checkForImagesData(previewedUser.data);
				$scope.canInviteUser = !previewedUser.data.isFriend && !previewedUser.data.hasPendingRequest;
				$scope.previewedUser = previewedUser.data;

				$scope.hideUserPreview();
			},
			function error(error) {
				socialNetwork.noty.error('Error fetching user preview information.');
			});
	}

	$scope.sendFriendRequest = function() {
		friendsData.sendFriendRequest($scope.userUsername).then(
			function success() {
				socialNetwork.noty.success('Friend request successfully sent.');
			},
			function error(error) {
				socialNetwork.noty.error('Error sending friend request.');
			});
	}

	$scope.checkForImagesData = $scope.$parent.checkForImagesData;

	$scope.showUserPreview = function(event) {
		$scope.userPreviewShown = true;

		$(event.target).next('div').css({
			top: event.clientY,
			left: event.clientX
		});
	}

	$scope.hideUserPreview = function() {
		$timeout(function() {
			$scope.userPreviewShown = false;
		}, $scope.hideTime);
	}
});