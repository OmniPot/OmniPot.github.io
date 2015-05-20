socialNetwork.directive('userWallPosts', function () {
	return {
		restrict: 'A',
		templateUrl: 'templates/posts.html',
		controller: 'userWallPostsController'
	}
});