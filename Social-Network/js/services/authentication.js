socialNetwork.factory('authentication', function($sessionStorage) {
	function setUserData(data) {
		data.username = data.userName;
		delete data.userName;
		$sessionStorage.user = data;
	}

	function getUserData() {
		return $sessionStorage.user;
	}

	function clearUserData() {
		$sessionStorage.$reset();
	}

	function getHeaders() {
		var headers,
			userData = getUserData();

		if (userData) {
			headers = { Authorization: 'Bearer ' + userData.access_token };
		}
		
		return headers;
	};

	function isLoggedIn() {
		return this.getUserData() ? true : false;
	}

	return {
		getUserData: getUserData,
		setUserData: setUserData,
		getHeaders: getHeaders,
		clearUserData: clearUserData,
		isLoggedIn: isLoggedIn,
	};
});