socialNetwork.directive('posts', function () {
	return {
		restrict: 'A',
		templateUrl: 'templates/posts.html',
		controller: 'PostsController'
	}
});