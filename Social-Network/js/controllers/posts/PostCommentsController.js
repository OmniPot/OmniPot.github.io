socialNetwork.controller('PostCommentsController', function($scope, commentsData) {
	var currentUserUsername = $scope.authentication.getUserData().username;

	$scope.getPostComments = function() {
		commentsData.getPostComments($scope.post.id).then(
			function success(postComments) {
				postComments.data.forEach(function(comment) {
					comment.author = $scope.checkForImagesData(comment.author);

					comment = commentsData.getAvailableCommentOptions($scope.post, comment, currentUserUsername);
				});

				$scope.comments = postComments.data;
			},
			function error(error) {
				socialNetwork.noty.error("Unable to fetch post comments data.");
			});
	}

	$scope.getPostComments($scope.post);

	$scope.addComment = function(commentContent) {
		commentsData.addPostComment($scope.post.id, commentContent).then(
			function success(result) {
				socialNetwork.noty.success("Comment added successfully.");
				$scope.getPostComments($scope.currentPost);
				$scope.commentContent = '';
			},
			function error(error) {
				socialNetwork.noty.error("Error while adding comment.");
			});
	}

	$scope.deleteComment = function(commentId) {
		commentsData.deletePostComment($scope.post.id, commentId).then(
			function success(result) {
				socialNetwork.noty.success("Successfully deleted comment.");
				$scope.getPostComments($scope.post);
			},
			function error(error) {
				socialNetwork.noty.error("Error while deleting comment.");
			})
	}

	$scope.likeComment = function(commentId) {
		commentsData.likePostComment($scope.post.id, commentId).then(
			function success(result) {
				socialNetwork.noty.success("Successfully liked comment.");
				$scope.getPostComments($scope.post);
			},
			function error(error) {
				socialNetwork.noty.error("Error while liking comment.");
			});
	}

	$scope.unlikeComment = function(commentId) {
		commentsData.unlikePostComment($scope.post.id, commentId).then(
			function success(result) {
				socialNetwork.noty.success("Successfully unliked comment.");
				$scope.getPostComments($scope.post);
			},
			function error(error) {
				socialNetwork.noty.error("Error while unliking comment.");
			});
	}
});