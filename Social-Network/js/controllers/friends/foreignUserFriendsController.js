socialNetwork.controller('foreignUserFriendsController', function($scope, $routeParams, friendsData) {
	$scope.userFriendsData = {};

	friendsData.getUserFriendsPreview($routeParams.username).then(
		function success(userFriends) {
			userFriends.data.friends.forEach(function (friend) {
				friend = $scope.checkForImagesData(friend);
			});

			$scope.userFriendsData.friendsCount = userFriends.data.totalCount;
			$scope.userFriendsData.friends = userFriends.data.friends;
		},
		function error(error) {
			socialNetwork.noty.error("Unable to fetch user friends data.");
		});
});