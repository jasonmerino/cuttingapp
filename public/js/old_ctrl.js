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
  })

  .controller('headerCtrl', ['$scope','$state', 'pages', 'animals', function($scope, $state, pages, animals) {
    $scope.animals = animals;
  }])

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
  })

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

  }])

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
      if($scope.customers.length != 0) {
        for(var i=0; i<$scope.customers.length; i++) {
          if($scope.customers[i]._id = id) {
            return $scope.customers[i].first_name + ' ' + $scope.customers[i].last_name;
          }    
        }
      }
    }       

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
  })

  .controller('newInstructionsCtrl', function($http, $scope, $stateParams, $modal, $filter, instructionsService, customersService, todaysDate, animals, formsService){
    $scope.formValues = {};
    $scope.animals = animals;
    $scope.customers = {};
    $scope.animal_type = "Select Animal";
    $scope.animal_name = animals[$stateParams.forms_id].name;
    $scope.productsTotal = 0;
    $scope.products = {};
    var product = "";

    var form = animals[$stateParams.forms_id].form;

    customersService.get()
      .success(function(data){
        $scope.customers = data;
    });

    formsService.get(form)
      .success(function(data){
        var formVars = angular.copy(data);
        $scope.forms = formVars.forms;
        $scope.animal_type = name;

        $scope.formValues.pricePerPound   = formVars.pricePerPound;
        $scope.formValues.minPrice        = formVars.minPrice;
    });

    formsService.get('products.json')
      .success(function(data){
        var product = data;
        $scope.products = [angular.copy(product)];

        $scope.addProduct = function() {  
          var output = angular.copy(product);
          $scope.products.push(output);
        }
      });

    $scope.launchModal = function(){
      var newModal = $modal.open({
        templateUrl: "partials/modal.customer.html",
        controller: "newCustomerCtrl",
        size: 'lg',
        scope: $scope
      });
    }

    $scope.removeProduct = function(index) {
      if (index > -1) {
        $scope.products.splice(index, 1);
      }
    }

    $scope.productCost = function(product, amount, index) {
      if(!(product == undefined)) {
        console.log(product);
        if (index > -1) {
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
      return $scope.totalProductCost()+$scope.totalCutting();
    }

    $scope.returnValue = function(key) {
      var value = "";

      if($scope.formValues.values[key] instanceof Array) {
        
        var array = $scope.formValues.values[key].sort();
        for(var i=0; i<array.length; i++) {
          value = array[i] + ", " + value;
        }
        
      } else {
        value = $scope.formValues.values[key];
      }
      return value;
    }

    $scope.submit = function () {
      console.log($scope.formValues);
    }

  });