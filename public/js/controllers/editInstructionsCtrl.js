'use strict';

/* Controllers */

angular.module('myApp.controllers')

  .controller('editInstructionsCtrl', function($http, $scope, $stateParams, $modal, $filter, instructionsService, customersService, todaysDate, animals, formsService, portionService, splitService){
    
    instructionsService.get($stateParams.inst_id)
      .success(function(data){
        console.log(data);
        $scope.forms        = data.forms[0];
        $scope.portion      = data.portion;
        $scope.split        = data.split;
        $scope.animal       = data.animal;
        $scope.created      = data.created;
        $scope.price        = data.price;
        $scope.weight       = data.weight;
        $scope.cust_id      = data.customer_id;
        $scope.name         = "";
        $scope.products     = data.products;

      customersService.get()
        .success(function(data){
          $scope.customers = data;

            if($scope.customers.length != 0) {
              for(var i=0; i<data.length; i++) {
                if($scope.customers[i]._id = $scope.cust_id) {
                  $scope.name = $scope.customers[i].first_name + ' ' + $scope.customers[i].last_name;
                }    
              }
            }
        });
      });

  });