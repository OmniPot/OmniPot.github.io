socialNetwork.controller('PostsController',
	function($scope, $location, $routeParams, postsData, usSpinnerService) {
		var currentUserUsername = $scope.authentication.getUserData().username;
		$scope.editPostContainer = {};

		$scope.posts = [];

		$scope.loadPosts = function() {
			if ($scope.busy) { return; }
			$scope.busy = true;

			usSpinnerService.spin('preloader');

			if ($location.path().indexOf('/users/') > -1) {
				getUserWallPosts();
			} else if ($location.path().indexOf('/home') > -1) {
				getNewsFeedPosts();
			}
		}

		$scope.addNewPost = function(postContent) {
			var postData = {
				postContent: postContent,
				username: $scope.wallOwner.username
			};

			postsData.addPost(postData).then(
				function success(result) {
					socialNetwork.noty.success("Successfully added post.");

					result.data.author = $scope.checkForImagesData(result.data.author);
					result.data.wallOwner.name = postsData.processPostHeader(result.data, currentUserUsername);
					result.data = postsData.getAvailablePostOptions(result.data, currentUserUsername);

					$scope.posts.unshift(result.data);
				},
				function error(error) {
					socialNetwork.noty.error("Error while submitting post.");
				});
		}

		$scope.deletePost = function(post) {
			postsData.deletePost(post.id).then(
				function success(result) {
					socialNetwork.noty.success("Successfully deleted post.");

					$scope.posts = $scope.posts.filter(function(p) {
						return p.id != post.id;
					});
				},
				function error(error) {
					socialNetwork.noty.error("Error while deleting post.");
				})
		}

		$scope.editPost = function(post) {
			postsData.editPost(post.id, $scope.editPostContainer[post.id]).then(
				function success(result) {
					socialNetwork.noty.success("Successfully edited post.");

					post.postContent = $scope.editPostContainer[post.id];
					$scope.editPostContainer[post.id] = undefined;
				},
				function error(error) {
					socialNetwork.noty.error("Error while editing post.");
				})
		}

		$scope.enableEditPost = function(post) {
			$scope.editPostContainer[post.id] = post.postContent;
		}

		$scope.cancelEditPost = function(post) {
			$scope.editPostContainer[post.id] = undefined;
		}

		$scope.likePost = function(post) {
			postsData.likePost(post.id).then(
				function success(result) {
					socialNetwork.noty.success("Successfully liked post.");

					post.liked = true;
					post.likesCount++;
				},
				function error(error) {
					socialNetwork.noty.error("Error while liking post.");
				});
		}

		$scope.unlikePost = function(post) {
			postsData.unlikePost(post.id).then(
				function success(result) {
					socialNetwork.noty.success("Successfully unliked post.");
					
					post.liked = false;
					post.likesCount--
				},
				function error(error) {
					socialNetwork.noty.error("Error while unliking post.");
				});
		}

		function getUserWallPosts() {
			postsData.getUserWallPosts($routeParams.username, $scope.startPostId)
				.then(getPostsSuccess, getPostsError);
		}

		function getNewsFeedPosts() {
			postsData.getNewsFeedPosts($scope.startPostId)
				.then(getPostsSuccess, getPostsError);
		}

		function getPostsSuccess(posts) {
			if (posts.data.length == 0) {
				$scope.stopScroll = true;
			} else {
				posts.data.forEach(function(post) {
					post.author = $scope.checkForImagesData(post.author);
					post.wallOwner.name = postsData.processPostHeader(post, currentUserUsername);
					post = postsData.getAvailablePostOptions(post, currentUserUsername);
				});

				$scope.posts = $scope.posts.concat(posts.data);

				$scope.startPostId = posts.data.pop().id;
				$scope.busy = false;
			}

			usSpinnerService.stop('preloader');
		}

		function getPostsError(error) {
			socialNetwork.noty.error("Unable to fetch posts data.");
			usSpinnerService.stop('preloader');
		}

		function infiniteScrollConfig() {
			$scope.stopScroll = false;
			$scope.busy = false;
			$scope.startPostId = undefined;
		}
	});