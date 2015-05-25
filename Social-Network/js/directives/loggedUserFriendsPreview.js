socialNetwork.directive('loggedUserFriendsPreview', function () {
	return {
		restrict: 'A',
		templateUrl: 'templates/friendsPreview.html',
		controller: 'LoggedUserFriendsPreviewController'
	}
});