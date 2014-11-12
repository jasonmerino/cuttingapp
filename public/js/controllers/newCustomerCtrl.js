'use strict';

/* Controllers */

angular.module('myApp.controllers')
  .controller('newCustomerCtrl', ['$scope', '$stateParams', '$rootScope', '$modalInstance', 'UsStates', 'customersService',  function($scope, $stateParams, $rootScope, $modalInstance, UsStates, customersService){
    $scope.UsStates = UsStates;
    $scope.customerData = {};

    if($stateParams.cust_id) {
      customersService.get($stateParams.cust_id)
        .success(function(data){
          $scope.customerData = data;
      });
    }

    $scope.submit = function() {
      if($stateParams.cust_id == undefined ) {

        if ($scope.customerData) {
          // call the create function from our service (returns a promise object)
          console.log($scope.customerData);
          customersService.create($scope.customerData)
            // if successful creation, call our get function to get all the new todos
            .success(function(data) {
              $scope.customerData = {}; // clear the form so our user is ready to enter another
              customersService.get()
              .success(function(data){
                console.log(data);
                $scope.$parent.customers = data;
              });

              $modalInstance.dismiss('cancel');
            });
        }
      } else {
        customersService.update($stateParams.cust_id, $scope.customerData)
          // if successful creation, call our get function to get all the new todos
        .success(function(data) {
          $scope.customerData = {}; // clear the form so our user is ready to enter another
           customersService.get($stateParams.cust_id)
            .success(function(data){
              $scope.$parent.customer = data;
            });
          $modalInstance.dismiss('cancel');
        });
      }
    };

    $scope.cancel = function(){
      $modalInstance.dismiss('cancel');
    }

  }]);