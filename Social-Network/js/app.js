var socialNetwork = angular.module('socialNetworkApp', ['ngRoute', 'ngResource', 'ngStorage', 'naif.base64']);

socialNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api/');

socialNetwork.config(function($routeProvider) {
	$routeProvider.when('/welcome', {
		controller: '',
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
		controller: 'userController',
		templateUrl: 'templates/profile.html'
	});

	$routeProvider.when('/home', {
		controller: 'homeController',
		templateUrl: 'templates/home.html'
	});

	$routeProvider.otherwise({
		redirectTo: '/welcome'
	});
});