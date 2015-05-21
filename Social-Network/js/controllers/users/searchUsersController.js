socialNetwork.controller('searchUsersController', function($scope, usersData) {
	$scope.applySearch = function(searchValue) {
		if ($scope.searchValue != null && $scope.searchValue != '') {
			usersData.searchUserByName(searchValue).then(
				function success(results) {
					results.data.forEach(function (user) {
						user = $scope.checkForImagesData(user);
					});

					$scope.foundUsers = results.data;
				},
				function error(error) {
					socialNetwork.noty.success('Could not search for users.')
				});
		} else {
			$scope.foundUsers = {};
		}
	}
});