socialNetwork.factory('postsData', function($http, baseServiceUrl, authentication) {
	function getNewsFeedPosts() {
		return $http({
			method: 'GET',
			url: baseServiceUrl + 'me/feed/?PageSize=5',
			headers: authentication.getHeaders()
		});
	}

	function getUserWallPosts(username) {
		return $http({
			method: 'GET',
			url: baseServiceUrl + 'users/' + username + '/wall?PageSize=5',
			headers: authentication.getHeaders()
		});
	}

	return {
		getNewsFeedPosts: getNewsFeedPosts,
		getUserWallPosts: getUserWallPosts
	}
});