socialNetwork.controller('FriendsFullListController',
	function($scope, $location, $routeParams, usersData, friendsData) {
		var currentUserUsername = $scope.authentication.getUserData().username;

		$scope.getUserData = function(wallOwnerUsername) {
			usersData.getUserData(wallOwnerUsername).then(
				function success(wallOwner) {
					wallOwner.data = $scope.checkForImagesData(wallOwner.data);
					$scope.wallOwner = wallOwner.data;

					if (wallOwner.data.isFriend) {
						$scope.getUserFriends(wallOwner.data.username);
					} else if (wallOwner.data.username == currentUserUsername) {
						$scope.getOwnFriends();
					} else {
						$location.path('/users/' + wallOwner.data.username);
						socialNetwork.noty.warn("Cannot view non-friend friends.");
					}

					$scope.friendsViewOptionAvailable = true;
				},
				function error(error) {
					$location.path('/users/' + $scope.wallOwner);
					socialNetwork.noty.error("Unable to fetch user profile data.");
				});
		}

		$scope.getUserFriends = function(username) {
			friendsData.getUserFriends(username).then(
				function success(friends) {
					friends.data.forEach(function(friend) {
						friend = $scope.checkForImagesData(friend);
					});

					$scope.friends = friends.data;
				},
				function error(error) {
					$location.path('/users/' + $scope.wallOwner);
					socialNetwork.noty.error("Unable to fetch user full friends data.");
				})
		}

		$scope.getOwnFriends = function() {
			friendsData.getOwnFriends().then(
				function success(friends) {
					friends.data.forEach(function(friend) {
						friend = $scope.checkForImagesData(friend);
					});

					$scope.friends = friends.data;
				},
				function error(error) {
					$location.path('/users/' + $scope.wallOwner);
					socialNetwork.noty.error("Unable to fetch own full friends data.");
				})
		}

		$scope.getUserData($routeParams.username);
	});