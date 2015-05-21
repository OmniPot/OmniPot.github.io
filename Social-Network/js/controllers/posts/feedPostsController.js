socialNetwork.controller('feedPostsController', function($scope, postsData) {
	postsData.getNewsFeedPosts().then(
		function success(newsFeedPosts) {
			newsFeedPosts.data.forEach(function (post) {
				post.author = $scope.checkForImagesData(post.author)
			});

			$scope.posts = newsFeedPosts.data;
		},
		function error(error) {
			socialNetwork.noty.error('Error fetching news feed information.');
		});
});