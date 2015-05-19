socialNetwork.factory('userData', ['$resource', 'baseServiceUrl', 'authentication',
	function($resource, baseServiceUrl, authentication) {
		function login(loginData) {
			var resource = $resource(baseServiceUrl + 'users/login').save(loginData);

			resource.$promise.then(
				function success(data) {
					authentication.setUserData(data);
				});

			return resource;
		}

		function logout() {
			var resource = $resource(baseServiceUrl + 'users/logout', {}, {
				logout: {
					method: 'POST',
					headers: authentication.getHeaders()
				}
			}).logout();

			authentication.clearUserData();

			return resource;
		}

		function register(registerData) {
			var resource = $resource(baseServiceUrl + 'users/register').save(registerData);

			resource.$promise.then(
				function success(data) {
					authentication.setUserData(data);
				});

			return resource;
		}

		function getUserProfileData() {
			var resource = $resource(baseServiceUrl + 'me', {}, {
				get: {
					headers: authentication.getHeaders()
				}
			}).get();

			return resource;
		}

		function editUserProfileData(data) {
			var resource = $resource(baseServiceUrl + 'me', {}, {
				editProfile: {
					method: 'PUT',
					headers: authentication.getHeaders()
				}
			}).editProfile(data);

			return resource;
		}

		return {
			login: login,
			logout: logout,
			register: register,
			getProfileData: getUserProfileData,
			editProfileData: editUserProfileData
		}
	}
]);