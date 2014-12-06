'use strict';

/* Controllers */

angular.module('myApp.controllers').controller('login', function($scope, $stateParams, $state, $rootScope, $http) {
    $scope.user = {};

    // Register the login() function
    $scope.login = function(){
      $http.post('/api/login', {
        username: $scope.user.username,
        password: $scope.user.password,
      })
      .success(function(user){
        // No error: authentication OK
        console.log("Fail");
        $rootScope.message = 'Authentication successful!';
        // $location.url('/');
      })
      .error(function(){
        // Error: authentication failed
        console.log("Fail");
        $rootScope.message = 'Authentication failed.';
        // $location.url('/');
      });
    };
  });