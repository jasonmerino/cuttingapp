'use strict';

/* Controllers */

angular.module('myApp.controllers')
    
  .controller('instructionCtrl', function($scope, $http, $stateParams, $templateCache, $compile, $modal, customersService, instructionsService){
    $scope.instructions;
    $scope.instruction_id = $stateParams.inst_id;

    instructionsService.get($stateParams.inst_id)
      .success(function(data){
        console.log(data);
        $scope.instructions = data.forms[0].values;
        $scope.portion  = data.portion;
        $scope.split    = data.split;
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

    $scope.print = function(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;        
      var popupWin = window.open('', '_blank', 'width=600,height=300');
      popupWin.document.open()
      popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="stylesheets/print.css" /></head><body onload="window.print()" class="print">' + printContents + '</html>');
      popupWin.document.close();
    }


  });