socialNetwork.controller('UserFriendsPreviewController', function($scope, $routeParams, friendsData) {
	$scope.userFriendsData = {};

	$scope.getUserFriendsPreview = function(username) {
		friendsData.getUserFriendsPreview(username).then(
			function success(userFriends) {
				userFriends.data.friends.forEach(function(friend) {
					friend = $scope.checkForImagesData(friend);
				});

				$scope.userFriendsData.friendsCount = userFriends.data.totalCount;
				$scope.userFriendsData.friends = userFriends.data.friends;
			},
			function error(error) {
				socialNetwork.noty.error("Unable to fetch user friends data.");
			});
	}

	$scope.getUserFriendsPreview($routeParams.username);
});