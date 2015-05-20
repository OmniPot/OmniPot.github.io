socialNetwork.controller('feedPostsController', function($scope, postsData) {
	postsData.getNewsFeedPosts().then(
		function success(newsFeedPosts) {
			$scope.posts = newsFeedPosts.data;
		},
		function error(error) {
			socialNetwork.noty.error('Error fetching news feed information.');
		});
});