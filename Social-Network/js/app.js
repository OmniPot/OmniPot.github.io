var socialNetwork = angular.module('socialNetworkApp', ['ngRoute', 'ngStorage', 'naif.base64', 'ui.bootstrap']);

socialNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api/');

socialNetwork.config(function($routeProvider) {
	$routeProvider.when('/welcome', {
		templateUrl: 'templates/welcome.html'
	});

	$routeProvider.when('/login', {
		controller: 'loginController',
		templateUrl: 'templates/login.html'
	});

	$routeProvider.when('/logout', {
		controller: 'logoutController',
		templateUrl: 'templates/welcome.html'
	});

	$routeProvider.when('/register', {
		controller: 'registerController',
		templateUrl: 'templates/register.html'
	});

	$routeProvider.when('/profile', {
		controller: 'editProfileController',
		templateUrl: 'templates/editProfile.html'
	});

	$routeProvider.when('/home', {
		templateUrl: 'templates/home.html'
	});

	$routeProvider.when('/users/:username/', {
		templateUrl: 'templates/userWall.html'
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
		}
	});
});