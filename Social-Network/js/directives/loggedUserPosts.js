socialNetwork.directive('loggedUserPosts', function () {
	return {
		restrict: 'A',
		templateUrl: 'templates/posts.html',
		controller: 'LoggedUserPostsController'
	}
});