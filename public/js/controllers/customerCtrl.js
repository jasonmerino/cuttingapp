'use strict';

/* Controllers */

angular.module('myApp.controllers')
  .controller('customerCtrl', function($scope, $stateParams, $http, $templateCache, $compile, $modal, customersService){

    $scope.customer = {};

    $scope.launchModal = function(){
      var newModal = $modal.open({
        templateUrl: "partials/modal.customer.html",
        controller: "newCustomerCtrl",
        size: 'lg',
        scope: $scope
      });
    }

    customersService.get($stateParams.cust_id)
      .success(function(data){
        $scope.customer = data;
      });
  })