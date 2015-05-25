socialNetwork.directive('userPosts', function () {
	return {
		restrict: 'A',
		templateUrl: 'templates/posts.html',
		controller: 'UserPostsController'
	}
});