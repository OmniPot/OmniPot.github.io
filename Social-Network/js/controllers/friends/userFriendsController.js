socialNetwork.controller('userFriendsController', function($scope, $routeParams, friendsData) {
	friendsData.getUserFriends($routeParams.username).then(
		function success(userFriendsData) {
			$scope.friendsCount = userFriendsData.data.totalCount;
			$scope.friends = userFriendsData.data.friends;
		},
		function error(error) {
			socialNetwork.noty.error("Unable to fetch user friends data.");
		});
});