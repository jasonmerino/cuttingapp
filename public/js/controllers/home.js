'use strict';

/* Controllers */

angular.module('myApp.controllers').controller('home', function($scope, $stateParams, $state, $rootScope) {
    $scope.pageName = $state.current.data.name;
    $rootScope.active = $state.current.data.name;
    $scope.entered = [];
    var list = [{ value: '' }, { value: '' }, { value: '' }];
    $scope.list = list;

    $scope.submit = function(){
      $scope.entered.push($scope.list);
    };

    $scope.test = function() {
      console.log($scope.form.data);
    }

    $scope.result = function() {
      return "success";
    }
  });