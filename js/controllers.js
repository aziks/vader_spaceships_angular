var VaderShipsControllers = angular.module('VaderShipsControllers', []);

VaderShipsControllers.controller('SpaceshipsListCtrl', ['$scope', '$http',

  function ($scope, $http) {

    $http.get('js/spaceships.json').success(function (data) {
      $scope.spaceships = data;
    }); 

  $scope.orderProp = 'date';
}]);

VaderShipsControllers.controller('SpaceshipDetailCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
    $scope.spaceshipId = $routeParams.spaceshipId;
}]);