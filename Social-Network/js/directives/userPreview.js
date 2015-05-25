socialNetwork.directive('userPreview', ['$document', function() {
	return {
		restrict: 'A',
		templateUrl: 'templates/userPreview.html',
		controller: 'UserPreviewController',
		scope: {
			userUsername: '=userUsername',
			userName: '=userName',
		}
	}
}]);