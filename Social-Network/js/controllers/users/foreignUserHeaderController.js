socialNetwork.controller('foreignUserHeaderController', function($scope, $routeParams, usersData) {
	usersData.getUserData($routeParams.username).then(
		function success(foreignUserProfile) {
			foreignUserProfile.data = $scope.checkForImagesData(foreignUserProfile.data);
			$scope.fetchForeignUserFriends = foreignUserProfile.data.isFriend;
			$scope.foreignUserProfile = foreignUserProfile.data;
		},
		function error(error) {
			socialNetwork.noty.error("Unable to fetch user profile data.");
		});
});