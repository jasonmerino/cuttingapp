'use strict';

/* Controllers */

angular.module('myApp.controllers')
  .controller('trimCtrl', function($http, $stateParams, $rootScope, $templateCache, $compile, $scope, $modal, customersService){
    $scope.trim = {};

    $scope.cancel = function(){
      $modalInstance.dismiss('cancel');
    };

    // $scope.total = function(){
    // };
  });