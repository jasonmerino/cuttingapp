'use strict';

/* Controllers */

angular.module('myApp.controllers')
    
  .controller('instructionCtrl', function($scope, $http, $stateParams, $templateCache, $compile, $modal, customersService, instructionsService){
    $scope.instructions;

    instructionsService.get($stateParams.inst_id)
      .success(function(data){
        console.log(data);
        $scope.instructions = data.forms[0].values;
        $scope.animal   = data.animal;
        $scope.created  = data.created;
        $scope.price    = data.price;
        $scope.weight   = data.weight;
        $scope.cust_id  = data.customer_id;
        $scope.name     = "";

        $scope.products = data.products;

        customersService.get()
          .success(function(data){
            $scope.customers = data;

              if($scope.customers.length != 0) {
                for(var i=0; i<data.length; i++) {
                  if($scope.customers[i]._id = $scope.cust_id) {
                    console.log("success");
                    $scope.name = $scope.customers[i].first_name + ' ' + $scope.customers[i].last_name;
                  }    
                }
              }
          });
      });
 

    $scope.returnValue = function(key) {
      var value = "";

      if($scope.instructions[key] instanceof Array) {
        
        var array = $scope.instructions[key].sort();
        for(var i=0; i<array.length; i++) {
          value = array[i] + ", " + value;
        }
        
      } else {
        value = $scope.instructions[key];
      }
      return value;
    }


  });