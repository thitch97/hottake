var app = angular.module('hottake', []);

app.controller('PageCtrl', ['$scope', '$http', '$sce', '$window', function($scope, $http, $sce, $window) {
	$scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }

  var url = 'https://hottake-api.herokuapp.com/';

  $http.get($scope.trustSrc(url + 'safety')).then(
		function(response) {
			$scope.results = response.data;
			$window.localStorage.setItem("heatSignatures", JSON.stringify($scope.results));
		},
		function(err) {
			throw err;
		}
	);

	$http.get($scope.trustSrc(url + 'geography')).then(
		function(response) {
			$scope.results = response.data;
			$window.localStorage.setItem("coordinates", JSON.stringify($scope.results));
		},
		function(err) {
			throw err;
		}
	);
}]);

app.controller('MapCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
}]);
