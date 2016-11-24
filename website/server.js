var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
   
    .when('/login', {
        templateUrl: 'pages/login.html',
        controller: 'firstController'
    })
    
    .when('/register', {
        templateUrl: 'pages/register.html',
        controller: 'secondController'
    })
    
});

myApp.controller('firstController', ['$scope', '$log', function($scope, $log) {
  $log.log("first");
    
}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {
 $log.log("second");
}]);

