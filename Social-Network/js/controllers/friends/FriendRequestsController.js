socialNetwork.controller('FriendRequestsController', function($scope, friendsData) {
	$scope.getFriendRequests = function() {
		friendsData.getFriendRequests().then(
			function success(requests) {
				requests.data.forEach(function(req) {
					req.user = $scope.checkForImagesData(req.user);
					req.user.gender =
						req.user.gender == 0 ? '' : req.user.gender == 1 ? '\u2642' : '\u2640';
				});

				$scope.friendRequests = requests.data;
				$scope.showRequests();
			},
			function error(error) {
				socialNetwork.noty.error("Unable to fetch friend requests.");
			});;
	};

	$scope.showRequests = function () {
		$scope.requestsVisible = true;
	}

	$scope.hideRequests = function () {
		$scope.requestsVisible = false;
	}

	$scope.approveRequest = function(requestId) {
		friendsData.approveFriendRequest(requestId).then(
			function success(result) {
				socialNetwork.noty.success("Friend request successfully approved.");
				$scope.getFriendRequests();
			},
			function error(error) {
				socialNetwork.noty.error("Unable to approve friend request.");
			});
	}

	$scope.rejectRequest = function(requestId) {
		friendsData.rejectFriendRequest(requestId).then(
			function success(result) {
				socialNetwork.noty.success("Friend request successfully rejected.");
				$scope.getFriendRequests();
			},
			function error(error) {
				socialNetwork.noty.error("Unable to reject friend request.");
			});
	}
});