socialNetwork.factory('postsData', function($http, baseServiceUrl, pageSize, authentication) {
	function getNewsFeedPosts(startPostId) {
		startPostId = startPostId ? 'startPostId=' + startPostId + '&' : '';
		return $http({
			method: 'GET',
			url: baseServiceUrl + 'me/feed/?' + startPostId + 'PageSize=' + pageSize,
			headers: authentication.getHeaders()
		});
	}

	function getUserWallPosts(username, startPostId) {
		startPostId = startPostId ? 'startPostId=' + startPostId + '&' : '';
		return $http({
			method: 'GET',
			url: baseServiceUrl + 'users/' + username + '/wall/?' + startPostId + 'PageSize=' + pageSize,
			headers: authentication.getHeaders()
		});
	}

	function addPost(postData) {
		return $http({
			method: 'POST',
			url: baseServiceUrl + 'posts/',
			headers: authentication.getHeaders(),
			data: {
				username: postData.username,
				postContent: postData.postContent
			}
		});
	}

	function deletePost(postId) {
		return $http({
			method: 'DELETE',
			url: baseServiceUrl + 'posts/' + postId,
			headers: authentication.getHeaders()
		});
	}

	function editPost(postId, newPostContent) {
		return $http({
			method: 'PUT',
			url: baseServiceUrl + 'posts/' + postId,
			headers: authentication.getHeaders(),
			data: {
				postContent: newPostContent
			}
		});
	}

	function likePost(postId) {
		return $http({
			method: 'POST',
			url: baseServiceUrl + 'posts/' + postId + '/likes',
			headers: authentication.getHeaders()
		});
	}

	function unlikePost(postId) {
		return $http({
			method: 'DELETE',
			url: baseServiceUrl + 'posts/' + postId + '/likes',
			headers: authentication.getHeaders()
		});
	}

	function getAvailablePostOptions(post, currentUserUsername) {
		post.editOptionAvailable = post.author.username == currentUserUsername;

		post.deleteOptionAvailable =
			post.author.username == currentUserUsername ||
			post.wallOwner.username == currentUserUsername;

		if (post.author.isFriend || post.wallOwner.isFriend || post.deleteOptionAvailable) {
			post.likeDislikeOptionAvailable = true;
			post.commentOptionAvailable = true;
		}

		return post;
	}

	function processPostHeader(post, currentUserUsername) {
		if (post.author.username == post.wallOwner.username) {
			if (post.wallOwner.gender == 1) {
				post.wallOwner.name = 'his own';
			} else if (post.wallOwner.gender == 2) {
				post.wallOwner.name = 'her own';
			} else if (post.wallOwner.gender == 0) {
				post.wallOwner.name = 'its own';
			}
		} else if (post.wallOwner.username == currentUserUsername) {
			post.wallOwner.name = 'your';
		}

		return post.wallOwner.name;
	}

	return {
		getNewsFeedPosts: getNewsFeedPosts,
		getUserWallPosts: getUserWallPosts,
		addPost: addPost,
		deletePost: deletePost,
		editPost: editPost,
		likePost: likePost,
		unlikePost: unlikePost,
		processPostHeader: processPostHeader,
		getAvailablePostOptions: getAvailablePostOptions
	}
});