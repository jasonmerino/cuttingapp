'use strict';

/* Controllers */

angular.module('myApp.controllers')
    
  .controller('instructionsCtrl', function($scope, $http, $stateParams, $templateCache, $compile, $modal, customersService, instructionsService){
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
      console.log(id);
      console.log($scope.customers);
      if($scope.customers.length > 0) {
        for(var i=0; i<$scope.customers.length; i++) {
          if($scope.customers[i]._id == id) {
            return $scope.customers[i].first_name + ' ' + $scope.customers[i].last_name;
            console.log($scope.customers[i].first_name);
          }    
        }
      }
    } 

    // $scope.customerName = function(id) {
    //   customersService.get(id)
    //     .success(function(data){
    //       return data.first_name;
    //     });
    //   }

    $scope.deleteInstruction = function(id) {
    instructionsService.delete(id)
      .success(function(data){
        instructionsService.get()
          .success(function(data){
            $scope.instructions = data;
        });
      })
    }

    $scope.launchModal = function(){
      var newModal = $modal.open({
        templateUrl: "partials/modal.instruction.html",
        controller: "newInstructionsCtrl",
        size: 'lg'
        });
      }
  });