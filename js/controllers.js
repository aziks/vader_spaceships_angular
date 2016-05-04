var VaderShipsControllers = angular.module('VaderShipsControllers', []);

VaderShipsControllers.controller('SpaceshipsListCtrl', ['$scope', 'Spaceship',

  function ($scope, Spaceship) {
    $scope.spaceships = Spaceship.query();
    $scope.orderProp = 'date';

}]);

VaderShipsControllers.controller('SpaceshipDetailCtrl', ['$scope', '$routeParams', 'Spaceship', 
  function ($scope, $routeParams, Spaceship) {
    $scope.spaceship = Spaceship.get({spaceshipId: $routeParams.spaceshipId},
      function (spaceship) {
        $scope.mainImageUrl = spaceship.images[0];
    });

    $scope.setImage = function (imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }

}]);