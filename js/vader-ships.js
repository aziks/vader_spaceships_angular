var VaderShips = angular.module('VaderShips', [
  'ngRoute',
  'VaderShipsServices',
  'VaderShipsControllers'
]);

VaderShips.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/spaceships', {
        templateUrl: 'partials/spaceships-list.html',
        controller: 'SpaceshipsListCtrl'
      }).
      when('/spaceships/:spaceshipId', {
        templateUrl: 'partials/spaceship-detail.html',
        controller: 'SpaceshipDetailCtrl'
      }).
      otherwise({
        redirectTo: '/spaceships'
      });
  }]);
