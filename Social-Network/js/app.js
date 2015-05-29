var socialNetwork = angular.module('socialNetworkApp', ['ngRoute', 'ngStorage', 'naif.base64', 'angularSpinner', 'infinite-scroll']);

socialNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api/');
socialNetwork.constant('pageSize', 4);

socialNetwork.config(function($routeProvider) {
	$routeProvider.when('/welcome', {
		templateUrl: 'templates/welcome.html'
	});

	$routeProvider.when('/login', {
		controller: 'LoginController',
		templateUrl: 'templates/login.html'
	});

	$routeProvider.when('/logout', {
		controller: 'LogoutController',
		templateUrl: 'templates/welcome.html'
	});

	$routeProvider.when('/register', {
		controller: 'RegisterController',
		templateUrl: 'templates/register.html'
	});

	$routeProvider.when('/profile', {
		controller: 'LoggedUserEditProfileController',
		templateUrl: 'templates/editProfile.html'
	});

	$routeProvider.when('/profile/password', {
		controller: 'LoggedUserEditProfileController',
		templateUrl: 'templates/editPassword.html'
	});

	$routeProvider.when('/home', {
		templateUrl: 'templates/home.html'
	});

	$routeProvider.when('/users/:username/', {
		templateUrl: 'templates/userWall.html'
	});

	$routeProvider.when('/users/:username/friends', {
		controller: 'FriendsFullListController',
		templateUrl: 'templates/friendsFullList.html'
	});

	$routeProvider.otherwise({
		redirectTo: '/welcome'
	});
});

socialNetwork.run(function($rootScope, $location, authentication) {
	$rootScope.$on('$locationChangeStart', function(event) {
		var isWelcome = $location.path().indexOf('/welcome'),
			isRegister = $location.path().indexOf('/register'),
			isLogin = $location.path().indexOf('/login');

		if (!authentication.isLoggedIn() && (isWelcome == -1 && isRegister == -1 && isLogin == -1)) {
			socialNetwork.noty.warn("Login or register first.");
			$location.path("/welcome");
		} else if (authentication.isLoggedIn() && (isWelcome > -1 || isRegister > -1 || isLogin > -1)) {
			socialNetwork.noty.warn("Aldready logged in.");
			$location.path("/home");
		}

	});
});