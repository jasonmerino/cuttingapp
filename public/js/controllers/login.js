'use strict';

/* Controllers */

angular.module('myApp.controllers').controller('login', function($scope, $stateParams, $state, $rootScope, $http, $location, loginService) {
    // This object will be filled by the form
    $scope.user = {};

    $scope.login = function() {
      loginService.login($scope.user)
      .success(function(user){
        // No error: authentication OK
        console.log('Authentication successful!')
        $location.url('home');
      })
      .error(function(){
        // Error: authentication failed
        console.log('Authentication failed.');
        $location.url('api/login');
      });
    }
  });