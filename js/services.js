var VaderShipsServices = angular.module('VaderShipsServices', ['ngResource']);

VaderShipsServices.factory('Spaceship', ['$resource',
  function($resource){
    return $resource('spaceships/:spaceshipId.json', {}, {
      query: {method:'GET', params:{spaceshipId:'spaceships'}, isArray:true}
    });
  }]);