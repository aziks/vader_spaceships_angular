var VaderShips = angular.module('VaderShips', []);

VaderShips.controller('MainCtrl', function ($scope, $http) {
  $http.get('js/spaceships.json').success(function (data) {
    $scope.spaceships = data;
  }); 

  $scope.orderProp = 'date';

});