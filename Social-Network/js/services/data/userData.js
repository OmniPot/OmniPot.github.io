socialNetwork.factory('userData', function($http, baseServiceUrl, authentication) {
	function login(loginData) {
		return $http({
				method: 'POST',
				url: baseServiceUrl + 'users/login',
				data: loginData
			})
			.success(function success(data) {
				authentication.setUserData(data);
			});
	}

	function logout() {
		return $http({
				method: 'POST',
				url: baseServiceUrl + 'users/logout',
				headers: authentication.getHeaders(),
			})
			.success(function success() {
				authentication.clearUserData();
			});
	};

	function register(registerData) {
		return $http({
				method: 'POST',
				url: baseServiceUrl + 'users/register',
				data: registerData
			})
			.success(function success(data) {
				authentication.setUserData(data);
			});
	}

	function getUserFullData(username) {
		return $http({
			method: 'GET',
			url: baseServiceUrl + 'users/' + username + '/',
			headers: authentication.getHeaders()
		});
	}

	function getUserPreviewData(username) {
		return $http({
			method: 'GET',
			url: baseServiceUrl + 'users/' + username + '/preview',
			headers: authentication.getHeaders()
		});
	}

	return {
		login: login,
		logout: logout,
		register: register,
		getUserData: getUserFullData,
		getUserPreview: getUserPreviewData
	}
});