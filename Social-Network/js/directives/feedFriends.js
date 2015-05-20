socialNetwork.directive('feedFriends', function () {
	return {
		restrict: 'A',
		templateUrl: 'templates/friendsPreview.html',
		controller: 'feedFriendsController'
	}
});