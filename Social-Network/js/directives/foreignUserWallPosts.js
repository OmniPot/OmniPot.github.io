socialNetwork.directive('foreignUserWallPosts', function () {
	return {
		restrict: 'A',
		templateUrl: 'templates/posts.html',
		controller: 'foreignUserWallPostsController'
	}
});