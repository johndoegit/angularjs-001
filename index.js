 
import './angular.js';
import './angular_route.js';  

// Write Javascript code!

var app = angular.module('myApp', ["ngRoute"]);
 

app.controller('myCtrl', function($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
});

app.controller('myCtrl2', function($scope) {
  $scope.names = [
    {name:'Jani',country:'Norway'},
    {name:'Hege',country:'Sweden'},
    {name:'Kai',country:'Denmark'}
  ];
});

app.controller('myCtrl3', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];
});

app.controller('myCtrl4', function($scope) {
    $scope.cars = [
        {model : "Ford Mustang", color : "red"},
        {model : "Fiat 500", color : "white"},
        {model : "Volvo XC90", color : "black"}
    ];
});

app.controller("myCtrl5", function($scope) {
  $scope.products = ["Milk", "Bread", "Cheese"];
  $scope.addItem = function () {
    $scope.errortext = "";
    if (!$scope.addMe) {return;}
    if ($scope.products.indexOf($scope.addMe) == -1) {
      $scope.products.push($scope.addMe);
    } else {
      $scope.errortext = "The item is already in your shopping list.";
    }
  }
  $scope.removeItem = function (x) {
    $scope.errortext = "";
    $scope.products.splice(x, 1);
  } 
});