socialNetwork.directive('userFriendsPreview', function () {
	return {
		restrict: 'A',
		templateUrl: 'templates/friendsPreview.html',
		controller: 'UserFriendsPreviewController'
	}
});