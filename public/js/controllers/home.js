'use strict';

/* Controllers */

angular.module('myApp.controllers').controller('home', function($scope, $stateParams, $state, $rootScope, loginService, instructionsService, customersService) {

    $scope.pageName = $state.current.data.name;
    $rootScope.active = $state.current.data.name;
    $scope.entered = [];
    var list = [{ value: '' }, { value: '' }, { value: '' }];
    $scope.list = list;
    $scope.instructions = {};
    $scope.customers = [];

    instructionsService.get()
      .success(function(data){
        $scope.instructions = data;
      });

    customersService.get()
      .success(function(data){
        $scope.customers = data;
      });

    $scope.customerName = function(id) {
      if($scope.customers.length > 0) {
        for(var i=0; i<$scope.customers.length; i++) {
          if($scope.customers[i]._id == id) {
            return $scope.customers[i].first_name + ' ' + $scope.customers[i].last_name;
            console.log($scope.customers[i].first_name);
          }    
        }
      }
    } 

    // $scope.submit = function(){
    //   $scope.entered.push($scope.list);
    // };

    // $scope.test = function() {
    //   console.log($scope.form.data);
    // }

    // $scope.result = function() {
    //   return "success";
    // }

  });