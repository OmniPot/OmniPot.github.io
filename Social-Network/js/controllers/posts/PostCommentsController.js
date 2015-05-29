socialNetwork.controller('PostCommentsController', function($scope, commentsData) {
	var currentUserUsername = $scope.authentication.getUserData().username;

	$scope.editCommentContainer = {};

	$scope.getPostComments = function(post) {
		commentsData.getPostComments(post.id).then(
			function success(postComments) {
				postComments.data.forEach(function(comment) {
					comment.author = $scope.checkForImagesData(comment.author);
					comment = commentsData.getAvailableCommentOptions(post, comment, currentUserUsername);
				});

				$scope.showMoreLessButtonAvailable = false;
				$scope.allCommentsShown = false;
				$scope.fullComments = postComments.data;
				$scope.showLastThreeComments();

				if (postComments.data.length > 3) {
					$scope.showMoreLessButtonAvailable = true;
				} else {
					$scope.showMoreLessButtonAvailable = false;
				}
			},
			function error(error) {
				socialNetwork.noty.error("Unable to fetch post comments data.");
			});
	}

	$scope.getPostComments($scope.post);

	$scope.showAllComments = function() {
		$scope.allCommentsShown = true;
		$scope.comments = $scope.fullComments;
	}

	$scope.showLastThreeComments = function() {
		$scope.allCommentsShown = false;
		$scope.comments = $scope.fullComments.slice(0, 3);
	}

	$scope.addComment = function(commentContent) {
		commentsData.addPostComment($scope.post.id, commentContent).then(
			function success(result) {
				socialNetwork.noty.success("Comment added successfully.");
				$scope.getPostComments($scope.post);
			},
			function error(error) {
				socialNetwork.noty.error("Error while adding comment.");
			});
	}

	$scope.deleteComment = function(post, comment) {
		commentsData.deletePostComment(post.id, comment.id).then(
			function success(result) {
				socialNetwork.noty.success("Successfully deleted comment.");
				$scope.comments = $scope.comments.filter(function(c) {
					return c.id != comment.id;
				});
			},
			function error(error) {
				socialNetwork.noty.error("Error while deleting comment.");
			})
	}

	$scope.editPostComment = function(post, comment) {
		commentsData.editPostComment(post.id, comment.id, $scope.editCommentContainer[comment.id]).then(
			function success(result) {
				socialNetwork.noty.success("Successfully edited comment.");
				comment.commentContent = $scope.editCommentContainer[comment.id];
				$scope.editCommentContainer[comment.id] = undefined;
			},
			function error(error) {
				socialNetwork.noty.error("Error while editing comment.");
			});
	}

	$scope.enableEditComment = function(comment) {
		$scope.editCommentContainer[comment.id] = comment.commentContent;
	}

	$scope.cancelEditComment = function(comment) {
		$scope.editCommentContainer[comment.id] = undefined;
	}


	$scope.likeComment = function(post, comment) {
		commentsData.likePostComment(post.id, comment.id).then(
			function success(result) {
				socialNetwork.noty.success("Successfully liked comment.");
				comment.liked = true;
				comment.likesCount++;
			},
			function error(error) {
				socialNetwork.noty.error("Error while liking comment.");
			});
	}

	$scope.unlikeComment = function(post, comment) {
		commentsData.unlikePostComment(post.id, comment.id).then(
			function success(result) {
				socialNetwork.noty.success("Successfully unliked comment.");
				comment.liked = false;
				comment.likesCount--;
			},
			function error(error) {
				socialNetwork.noty.error("Error while unliking comment.");
			});
	}
});