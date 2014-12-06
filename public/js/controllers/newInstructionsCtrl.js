'use strict';

/* Controllers */

angular.module('myApp.controllers')

  .controller('newInstructionsCtrl', function($http, $scope, $stateParams, $modal, $filter, instructionsService, customersService, todaysDate, animals, formsService){
    
    // Scope Objects

    $scope.formValues = {};
    $scope.animals = animals;
    $scope.customers = {};
    $scope.animal_name = animals[$stateParams.forms_id].name;
    $scope.productsTotal = 0;
    $scope.products = {};
    $scope.instructions = {};
    $scope.totalPrice = null;
    $scope.product_selection = [];

    // Get Customers

    customersService.get()
      .success(function(data){
        $scope.customers = data;
    });

    
    // Get forms for animal passes in 

    var form = animals[$stateParams.forms_id].form;

    formsService.get(form)
      .success(function(data){
        var formVars = angular.copy(data);
        $scope.forms = formVars.forms;
        $scope.animal_type = name;
        $scope.formValues.pricePerPound   = formVars.pricePerPound;
        $scope.formValues.minPrice        = formVars.minPrice;
    });

    // Load Products JSON

    formsService.get('products.json')
      .success(function(data){
        var product = data;
        $scope.products = [angular.copy(product)];

        $scope.addProduct = function() {  
          var output = angular.copy(product);
          $scope.products.push(output);
        }
      });


    // New customer modal

    var product = "";

    $scope.launchModal = function(){
      var newModal = $modal.open({
        templateUrl: "partials/modal.customer.html",
        controller: "newCustomerCtrl",
        size: 'lg',
        scope: $scope
      });
    }

    $scope.launchTrimModal = function(){
      var newModal = $modal.open({
        templateUrl: "partials/modal.trim.html",
        controller: "newCustomerCtrl",
        size: 'lg',
        scope: $scope
      });
    }

    $scope.removeProduct = function(index) {
      if (index > -1) {
        $scope.product_selection.splice(index, 1);
        $scope.products.splice(index, 1);
      }
    }


    // Product cost calculations

    $scope.productCost = function(product, amount, index) {
      var temp = {
        "category": "",
        "name": "",
        "amount": ""
      }
      if(!(product == undefined)) {

        if (index > -1) {
          if($scope.product_selection[index] != undefined) {
            $scope.product_selection[index].category = product.category;
            $scope.product_selection[index].name = product.name;
            $scope.product_selection[index].amount = amount;
          } else {
            var temp = angular.copy(temp);
            temp.name = product.name;
            temp.amount = amount;
            $scope.product_selection.push(temp);
          }
          console.log($scope.product_selection);
          $scope.products[index].total = product.price * amount;
        }
        return $filter('currency')(product.price * amount);
      }
    }

    $scope.totalProductCost = function() {
      var total = 0;
      for(var i=0; i<$scope.products.length; i++) {
        if($scope.products[i].total > 0) { 
          total = total + $scope.products[i].total;
        }
      }
      $scope.productsTotal = total;
      return total;
    }

    $scope.totalCutting =  function(){
      if($scope.formValues.minPrice == undefined || $scope.formValues.pricePerPound == undefined) {
        return "";
      } else {
        var total;
        $scope.formValues.minPrice > $scope.formValues.pricePerPound * $scope.formValues.weight || $scope.formValues.weight == undefined ? total = $scope.formValues.minPrice : total = $scope.formValues.pricePerPound * $scope.formValues.weight;
        $scope.formValues.totalCost = total;
        return total;
      }
    };

    $scope.totalCost = function() {
      $scope.totalPrice = $scope.totalProductCost()+$scope.totalCutting();
      return $scope.totalProductCost()+$scope.totalCutting();
    }

    $scope.returnValue = function(key) {
      var value = "";

      if($scope.formValues.values[key] instanceof Array) {
        
        var array = $scope.formValues.values[key].sort();
        for(var i=0; i<array.length; i++) {
          value = array[i] + ", " + value;
        }
        
      } else if ($scope.formValues.values[key] instanceof Object){

        angular.forEach($scope.formValues.values[key], function(objectValue, index){
          if(objectValue != null) {
            value = $filter('camelCaseToHuman')(index) + ": " + objectValue + " \n " + value;
          }
        })
      } else {
        value = $scope.formValues.values[key];
      }
      return value;
    }

    $scope.submit = function() {

      console.log($scope.new_product);

      $scope.instructions.customer_id = $scope.customer_id;
      $scope.instructions.animal      = $scope.animal_name;
      $scope.instructions.weight      = $scope.formValues.weight;
      $scope.instructions.price       = $scope.totalPrice;
      $scope.instructions.created     = todaysDate;
      $scope.instructions.completed   = false;
      $scope.instructions.forms       = $scope.formValues;
      $scope.instructions.products    = $scope.product_selection;

      console.log($scope.instructions);

      if ($scope.instructions) {
        // call the create function from our service (returns a promise object)
        console.log($scope.instructions);
        instructionsService.create($scope.instructions)
          // if successful creation, call our get function to get all the new todos
          .success(function(data) {
            console.log("success");
            $scope.instructions = {}; // clear the form so our user is ready to enter another
            $scope.formValues = {};
          });
      }
    };

  });