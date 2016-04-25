angular.module('VaderShips', [

])

.controller('MainCtrl', function($scope){
  
  $scope.spaceships = [
    {
      name:        'Defender',
      color:       'black',
      hp:          3500,
      fuel:        30,
      date:        "2016-01-23T18:25:43.511Z",
      lat:         "33.3936955",
      lng:         "-104.5230833",
      description: 'The best fighter',
      imgUrlkey: "http://tinyurl.com/gofmj6n", 
      comment:      ""
    },
    {
      name:        'First Order',
      color:       'dark grey',
      hp:          2500,
      fuel:        30,
      date:        "2009-07-14T18:25:43.511Z",
      lat:         "40.4169149",
      lng:         "-3.7035676",
      description: 'The modern fighter',
      imgUrlkey: "http://tinyurl.com/gofmj6n", 
      comment:      ""
    },
    {
      name:        'OT',
      color:       "white",
      hp:          3000,
      fuel:        30,
      date:        "2013-11-20T18:25:43.511Z",
      lat:         "35.6808126",
      lng:         "139.7666296",
      description: 'The classic fighter',
      imgUrlkey: "http://tinyurl.com/gofmj6n", 
      comment:      ""
    },
    {
      name:        'Destroyer',
      color:       "grey",
      hp:          9000,
      fuel:        90,
      date:        "2010-09-03T18:25:43.511Z",
      lat:         "15.6808126",
      lng:         "339.7666296",
      description: 'The Destroyer of worlds',
      imgUrlkey: "http://tinyurl.com/gofmj6n", 
      comment:      ""
    }
  ];

});