socialNetwork.factory('friendsData', function($http, baseServiceUrl, authentication) {
	function getOwnFriends() {
		return $http({
			method: 'GET',
			url: baseServiceUrl + 'me/friends',
			headers: authentication.getHeaders()
		});
	}

	function getUserFriendsPreview(username) {
		return $http({
			method: 'GET',
			url: baseServiceUrl + 'users/' + username + '/friends',
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

	return {
		getOwnFriends: getOwnFriends,
		getUserFriends: getUserFriends,
		getUserFriendsPreview: getUserFriendsPreview,
	}
});