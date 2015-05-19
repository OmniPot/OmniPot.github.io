socialNetwork.factory('authentication', function($sessionStorage) {
	function setUserData(data) {
		$sessionStorage.user = data;
	}

	function getUserData() {
		return $sessionStorage.user;
	}

	function clearUserData() {
		$sessionStorage.$reset();
	}

	function getHeaders() {
		var headers = {};
		var userData = getUserData();
		if (userData) {
			headers.Authorization = 'Bearer ' + userData.access_token;
		}

		return headers;
	};

	function isAdmin() {
		var isAdmin = getUserData().isAdmin;
		return isAdmin;
	}

	return {
		getUserData: getUserData,
		setUserData: setUserData,
		getHeaders: getHeaders,
		clearUserData: clearUserData,
		isAdmin: isAdmin
	};
});