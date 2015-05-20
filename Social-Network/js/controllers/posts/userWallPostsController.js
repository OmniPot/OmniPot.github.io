socialNetwork.controller('userWallPostsController', function($scope, $routeParams, postsData) {
	postsData.getUserWallPosts($routeParams.username).then(
		function success(userWallData) {
			$scope.posts = userWallData.data;
		},
		function error(error) {
			socialNetwork.noty.error("Unable to fetch user wall data.");
		});
});