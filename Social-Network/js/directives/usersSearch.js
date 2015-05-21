socialNetwork.directive('usersSearch', function () {
	return {
		restrict: 'A',
		templateUrl: 'templates/searchContainer.html',
		controller: 'searchUsersController'
	}
});