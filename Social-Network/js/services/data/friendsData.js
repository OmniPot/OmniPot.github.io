socialNetwork.factory('friendsData', function($http, baseServiceUrl, authentication) {
	function getOwnFriends() {
		return $http({
			method: 'GET',
			url: baseServiceUrl + 'me/friends',
			headers: authentication.getHeaders()
		});
	}

	function getOwnFriendsPreview() {
		return $http({
			method: 'GET',
			url: baseServiceUrl + 'me/friends/preview',
			headers: authentication.getHeaders()
		});
	}

	function getUserFriends(username) {
		return $http({
			method: 'GET',
			url: baseServiceUrl + 'users/' + username + '/friends',
			headers: authentication.getHeaders()
		});
	}

	function getUserFriendsPreview(username) {
		return $http({
			method: 'GET',
			url: baseServiceUrl + 'users/' + username + '/friends/preview',
			headers: authentication.getHeaders()
		});
	}

	return {
		getOwnFriends: getOwnFriends,
		getOwnFriendsPreview: getOwnFriendsPreview,
		getUserFriends: getUserFriends,
		getUserFriendsPreview: getUserFriendsPreview
	}
});