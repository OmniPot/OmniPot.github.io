socialNetwork.controller('feedFriendsController', function($scope, friendsData) {
	friendsData.getOwnFriends().then(
		function success(friends) {
			$scope.friends = friends.data;
		},
		function error(error) {
			socialNetwork.noty.error("Unable to fetch own friends data.");
		})
});