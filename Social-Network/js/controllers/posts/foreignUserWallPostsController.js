socialNetwork.controller('foreignUserWallPostsController', function($scope, $routeParams, postsData) {
	postsData.getUserWallPosts($routeParams.username).then(
		function success(userWallPosts) {
			userWallPosts.data.forEach(function (post) {
				post.author = $scope.checkForImagesData(post.author);
			});
			
			$scope.posts = userWallPosts.data;
		},
		function error(error) {
			socialNetwork.noty.error("Unable to fetch user wall data.");
		});
});