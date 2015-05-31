socialNetwork.controller('PostCommentsController', function($scope, commentsData) {
	var currentUserUsername = $scope.authentication.getUserData().username;

	$scope.editCommentContainer = {};
	$scope.comments = processCommentsData($scope.post.comments);

	$scope.getAllPostComments = function() {
		commentsData.getPostComments($scope.post.id).then(
			function success(result) {
				$scope.comments = processCommentsData(result.data);
			},
			function error(error) {
				socialNetwork.noty.error("Unable to fetch post comments data.");
			});
	}

	$scope.showLastThreeComments = function() {
		$scope.comments = $scope.comments.slice(0, 3);
	}

	$scope.addComment = function(post, newCommentContent) {
		commentsData.addPostComment(post.id, newCommentContent).then(
			function success(result) {
				socialNetwork.noty.success("Comment added successfully.");
				$('.commentPostContainer input').val('');

				result.data.author = $scope.checkForImagesData(result.data.author);
				result.data = commentsData.getAvailableCommentOptions(post, result.data, currentUserUsername);

				post.totalCommentsCount++;
				$scope.comments.unshift(result.data);
			},
			function error(error) {
				socialNetwork.noty.error("Error while adding comment.");
			});
	}

	$scope.deleteComment = function(post, comment) {
		commentsData.deletePostComment(post.id, comment.id).then(
			function success(result) {
				socialNetwork.noty.success("Successfully deleted comment.");

				var index = post.comments.indexOf(comment);

				$scope.comments.splice(index, 1);
				post.totalCommentsCount--;
			},
			function error(error) {
				socialNetwork.noty.error("Error while deleting comment.");
			});
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

	function processCommentsData(data) {
		data.forEach(function(comment) {
			comment.author = $scope.checkForImagesData(comment.author);
			comment = commentsData.getAvailableCommentOptions($scope.post, comment, currentUserUsername);
		});

		return data;
	}
});