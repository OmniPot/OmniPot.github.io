socialNetwork.directive('feedFriendsPreview', function () {
	return {
		restrict: 'A',
		templateUrl: 'templates/friendsPreview.html',
		controller: 'feedFriendsController'
	}
});