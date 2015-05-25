socialNetwork.controller('LoggedUserPostsController', function($scope, postsData) {
	var currentUserUsername = $scope.authentication.getUserData().username;

	$scope.getNewsFeedPosts = function() {
		postsData.getNewsFeedPosts().then(
			function success(newsFeedPosts) {
				newsFeedPosts.data.forEach(function(post) {
					post.author = $scope.checkForImagesData(post.author);

					post.wallOwner.name = postsData.processPostHeader(post, currentUserUsername);

					post = postsData.getAvailablePostOptions(post, currentUserUsername);
				});

				$scope.posts = newsFeedPosts.data;
			},
			function error(error) {
				socialNetwork.noty.error('Error fetching news feed information.');
			});
	}

	$scope.getNewsFeedPosts();
});