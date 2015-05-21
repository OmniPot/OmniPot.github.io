socialNetwork.directive('foreignUserFriendsPreview', function () {
	return {
		restrict: 'A',
		templateUrl: 'templates/friendsPreview.html',
		controller: 'foreignUserFriendsController'
	}
});