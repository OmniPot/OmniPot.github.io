socialNetwork.controller('feedFriendsController', function($scope, friendsData) {
	$scope.userFriendsData = {};

	friendsData.getOwnFriendsPreview().then(
		function success(ownFriendsPreview) {
			ownFriendsPreview.data.friends.forEach(function (friend) {
				friend = $scope.checkForImagesData(friend);
			})

			$scope.userFriendsData.friendsCount = ownFriendsPreview.data.totalCount;
			$scope.userFriendsData.friends = ownFriendsPreview.data.friends;
		},
		function error(error) {
			socialNetwork.noty.error("Unable to fetch own friends data.");
		})
});