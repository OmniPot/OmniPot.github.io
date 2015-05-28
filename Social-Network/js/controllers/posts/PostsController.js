socialNetwork.controller('PostsController', function($scope, $location, $routeParams, postsData) {
	var currentUserUsername = $scope.authentication.getUserData().username;

	$scope.editPostContainer = {};

	$scope.getUserWallPosts = function(username) {
		postsData.getUserWallPosts(username).then(
			function success(userWallPosts) {
				userWallPosts.data.forEach(function(post) {
					post.author = $scope.checkForImagesData(post.author);
					post.wallOwner.name = postsData.processPostHeader(post, currentUserUsername);
					post.date = new Date(post.date);
					post = postsData.getAvailablePostOptions(post, currentUserUsername);
				});

				$scope.posts = userWallPosts.data;
			},
			function error(error) {
				socialNetwork.noty.error("Unable to fetch user wall data.");
			});
	}

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

	$scope.loadPosts = function() {
		if ($location.path().indexOf('/users/') > -1) {
			$scope.getUserWallPosts($routeParams.username);
		} else if ($location.path().indexOf('/home') > -1) {
			$scope.getNewsFeedPosts();
		}
	}

	$scope.loadPosts();

	$scope.addNewPost = function(postContent) {
		var postData = {
			postContent: postContent,
			username: $scope.wallOwner.username
		};

		postsData.addPost(postData).then(
			function success(result) {
				socialNetwork.noty.success("Successfully added post.");
				$scope.loadPosts();
			},
			function error(error) {
				socialNetwork.noty.error("Error while submitting post.");
			});
	}

	$scope.deletePost = function(postId) {
		postsData.deletePost(postId).then(
			function success(result) {
				socialNetwork.noty.success("Successfully deleted post.");
				$scope.loadPosts();
			},
			function error(error) {
				socialNetwork.noty.error("Error while deleting post.");
			})
	}

	$scope.editPost = function(postId) {
		postsData.editPost(postId, $scope.editPostContainer[postId]).then(
			function success(result) {
				socialNetwork.noty.success("Successfully edited post.");
				$scope.editPostContainer[postId] = undefined;
				$scope.loadPosts();
			},
			function error(error) {
				socialNetwork.noty.error("Error while editing post.");
			})
	}

	$scope.enableEditPost = function(postId, postContent) {
		$scope.editPostContainer[postId] = postContent;
	}

	$scope.cancelEditPost = function(postId) {
		$scope.editPostContainer[postId] = undefined;
	}

	$scope.likePost = function(postId) {
		postsData.likePost(postId).then(
			function success(result) {
				socialNetwork.noty.success("Successfully liked post.");
				$scope.loadPosts();
			},
			function error(error) {
				socialNetwork.noty.error("Error while liking post.");
			});
	}

	$scope.unlikePost = function(postId) {
		postsData.unlikePost(postId).then(
			function success(result) {
				socialNetwork.noty.success("Successfully unliked post.");
				$scope.loadPosts();
			},
			function error(error) {
				socialNetwork.noty.error("Error while unliking post.");
			});
	}
});