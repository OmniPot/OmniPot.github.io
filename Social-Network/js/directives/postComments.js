socialNetwork.directive('postComments', function () {
	return {
		restrict: 'A',
		templateUrl: 'templates/comments.html',
		controller: 'PostCommentsController'
	}
});