'use strict';

/* Controllers */

angular.module('myApp.controllers')
  .controller('customersCtrl', function($http, $stateParams, $rootScope, $templateCache, $compile, $scope, $modal, customersService){
    
    $scope.customers = {};

    customersService.get()
      .success(function(data){
        $scope.customers = data;
      });

    $scope.launchModal = function(){
      var newModal = $modal.open({
        templateUrl: "partials/modal.customer.html",
        controller: "newCustomerCtrl",
        size: 'lg',
        scope: $scope
      });
    }

    $scope.deleteCustomer = function(id) {
      customersService.delete(id)
        .success(function(data){
          customersService.get()
            .success(function(data){
              $scope.customers = data;
            });
        })
    }

    $scope.removeCustomer = function(value) {
      for (var i=0; i<customers.length; i++) {
        if (customers[i].indexkey === value) {
            customers.splice(i, 1);
        }
      }
    }

    $scope.clearForm = function(form) {
      $scope.filterCustomers = null;
    }
  });