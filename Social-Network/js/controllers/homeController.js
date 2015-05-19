socialNetwork.controller('homeController', ['$scope', '$location', 'userData',
	function($scope, $location, userData, profileData) {
		$scope.formatBase64 = function(data) {
			if (!data) {
				return null;
			}

			return 'data:image/png;base64,' + data;
		}
	}
]);