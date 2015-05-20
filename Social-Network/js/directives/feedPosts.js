socialNetwork.directive('feedPosts', function () {
	return {
		restrict: 'A',
		templateUrl: 'templates/posts.html',
		controller: 'feedPostsController'
	}
});