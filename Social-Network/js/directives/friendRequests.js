socialNetwork.directive('friendRequests', function () {
	return {
		restrict: 'A',
		templateUrl: 'templates/friendRequests.html',
		controller: 'LoggedUserFriendRequestsController'
	}
});