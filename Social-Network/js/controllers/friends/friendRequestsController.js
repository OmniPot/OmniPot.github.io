socialNetwork.controller('friendRequestsController', function($scope, friendsData) {
	$scope.getFriendRequests = function() {
		friendsData.getFriendRequests().then(
			function success(requests) {
				requests.data.forEach(function(req) {
					req = $scope.checkForImagesData(req.user);
				});

				$scope.friendRequests = requests.data;
				$scope.requestsVisible = true;
			},
			function error(error) {
				socialNetwork.noty.error("Unable to fetch friend requests.");
			});;
	};

	$scope.approveRequest = function(requestId) {
		friendsData.approveFriendRequest(requestId).then(
			function success(result) {
				socialNetwork.noty.success("Friend request successfully approved.");
			},
			function error(error) {
				socialNetwork.noty.error("Unable to approve friend request.");
			});
	}

	$scope.rejectRequest = function(requestId) {
		friendsData.rejectFriendRequest(requestId).then(
			function success(result) {
				socialNetwork.noty.success("Friend request successfully rejected.");
			},
			function error(error) {
				socialNetwork.noty.error("Unable to reject friend request.");
			});
	}
});