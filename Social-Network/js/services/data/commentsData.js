socialNetwork.factory('commentsData', function($http, baseServiceUrl, authentication) {
	function getPostComments(postId) {
		return $http({
			method: 'GET',
			url: baseServiceUrl + 'posts/' + postId + '/comments',
			headers: authentication.getHeaders()
		});
	}

	function addPostComment(postId, commentContent) {
		return $http({
			method: 'POST',
			url: baseServiceUrl + 'posts/' + postId + '/comments',
			headers: authentication.getHeaders(),
			data: {
				commentContent: commentContent
			}
		});
	}

	function deletePostComment(postId, commentId) {
		return $http({
			method: 'DELETE',
			url: baseServiceUrl + 'posts/' + postId + '/comments/' + commentId,
			headers: authentication.getHeaders()
		});
	}

	function editPostComment(postId, commentId, commentContent) {
		return $http({
			method: 'PUT',
			url: baseServiceUrl + 'posts/' + postId + '/comments/' + commentId,
			headers: authentication.getHeaders(),
			data: {
				commentContent: commentContent
			}
		});
	}

	function likePostComment(postId, commentId) {
		return $http({
			method: 'POST',
			url: baseServiceUrl + 'posts/' + postId + '/comments/' + commentId + '/likes',
			headers: authentication.getHeaders()
		});
	}

	function unlikePostComment(postId, commentId) {
		return $http({
			method: 'DELETE',
			url: baseServiceUrl + 'posts/' + postId + '/comments/' + commentId + '/likes',
			headers: authentication.getHeaders()
		});
	}

	function getAvailableCommentOptions(post, comment, currentUserUsername) {
		comment.deleteOptionAvailable =
			comment.author.username == currentUserUsername ||
			post.author.username == currentUserUsername;

		if (post.author.isFriend || post.wallOwner.isFriend || comment.deleteOptionAvailable) {
			comment.likeDislikeOptionAvailable = true;
		}

		return comment;
	}

	return {
		getPostComments: getPostComments,
		addPostComment: addPostComment,
		deletePostComment: deletePostComment,
		editPostComment: editPostComment,
		likePostComment: likePostComment,
		unlikePostComment: unlikePostComment,
		getAvailableCommentOptions: getAvailableCommentOptions
	}
});