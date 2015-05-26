socialNetwork.directive('userPreview', function() {
	return {
		restrict: 'A',
		templateUrl: 'templates/userPreview.html',
		controller: 'UserPreviewController',
		scope: {
			userUsername: '=userUsername',
			userName: '=userName',
		}
	}
});