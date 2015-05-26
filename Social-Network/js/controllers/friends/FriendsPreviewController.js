socialNetwork.controller('FriendsPreviewController', function($scope, $location, $routeParams, friendsData) {
	var currentUserUsername = $scope.authentication.getUserData().username;

	$scope.userFriendsData = {};

	$scope.getUserFriendsPreview = function(username) {
		friendsData.getUserFriendsPreview(username).then(
			function success(userFriends) {
				userFriends.data.friends.forEach(function(friend) {
					friend = $scope.checkForImagesData(friend);
				});

				$scope.userFriendsData.friendsCount = userFriends.data.totalCount;
				$scope.userFriendsData.friends = userFriends.data.friends;
				$scope.userFriendsData.previewOwner = $routeParams.username;
			},
			function error(error) {
				socialNetwork.noty.error("Unable to fetch user friends data.");
			});
	}

	$scope.getOwnFriendsPreview = function() {
		friendsData.getOwnFriendsPreview().then(
			function success(ownFriendsPreview) {
				ownFriendsPreview.data.friends.forEach(function(friend) {
					friend = $scope.checkForImagesData(friend);
				})

				$scope.userFriendsData.friendsCount = ownFriendsPreview.data.totalCount;
				$scope.userFriendsData.friends = ownFriendsPreview.data.friends;
			},
			function error(error) {
				socialNetwork.noty.error("Unable to fetch own friends data.");
			})
	}

	$scope.loadFriendsPreview = function(username) {
		if ($location.path().indexOf('/users/') > -1) {
			if (username == currentUserUsername) {
				$scope.getOwnFriendsPreview();
			} else {
				$scope.getUserFriendsPreview(username);
			}
		} else if ($location.path().indexOf('/home') > -1) {
			$scope.getOwnFriendsPreview();
		}
	}

	$scope.loadFriendsPreview($routeParams.username);
});