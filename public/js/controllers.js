'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  
  .controller('app', function($scope, $rootScope) {
   $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
        $scope.pageClass = toState.data.slug;
    });
  })

  .controller('home', function($scope, $stateParams, $state, $rootScope) {
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
      // $scope.value = $scope.form.radio.$viewValue;
    }

    $scope.result = function() {
      return "success";
    }
  })

  .controller('headerCtrl', ['$scope','$state', 'pages', function($scope, $state, pages) {
    $scope.pages = pages;
  }])

  .controller('customersCtrl', function($http, $stateParams, $rootScope, $templateCache, $compile, $scope, customersService){
    
    customersService.get()
      .success(function(data){
        $scope.customers = data;
      });

    // $scope.showModal = false;

    $scope.launchModal = function(){
      var tplUrl = "partials/modal.customer.html";
      $http.get(tplUrl, {cache: $templateCache}).success(function(tplContent){
         angular.element(document.body).append($compile(tplContent)($scope));
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

  .controller('customerCtrl', function($scope, $stateParams, $http, $templateCache, $compile, customersService){

    $scope.launchModal = function(){
      var tplUrl = "partials/modal.customer.html";
      $http.get(tplUrl, {cache: $templateCache}).success(function(tplContent){
         angular.element(document.body).append($compile(tplContent)($scope));
      });
    }

    customersService.get($stateParams.cust_id)
      .success(function(data){
        $scope.customer = data;
      });
  })

  .controller('newCustomerCtrl', ['$scope', '$stateParams', '$element', '$rootScope', 'UsStates', 'customersService', function($scope, $stateParams, $element, $rootScope, UsStates, customersService){
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
                $scope.$parent.customers = data;
              });

              $element.remove();
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

          $element.remove();
        });
      }
    };

    $scope.remove = function(){
      $element.remove();
    }

  }])

  .controller('instructionsCtrl', function($scope, $http, $stateParams, $templateCache, $compile, $modal, customersService, instructionsService){
    $scope.customers = []

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


      // $scope.customerName('54189c6891bbb28663431229');
    

    $scope.instructionName = function(id) {
      console.log(id);
      // customersService.get(id)
      //   .success(function(data){
      //     console.log(data);
      //   });
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
        controller: "newInstructionsCtrl"
      });

      // var tplUrl = "partials/modal.instruction.html";
      // $http.get(tplUrl, {cache: $templateCache}).success(function(tplContent){
      //    angular.element(document.body).append($compile(tplContent)($scope));
      // });

      // var modalInstance = $modal.open({
      //   templateUrl: "partials/modal.instruction.html",
      //   controller: 'newInstructionsCtrl'
      // });
    }

  })

  .controller('newInstructionsCtrl', function($scope, $element, $templateCache, $modalInstance, instructionsService, customersService, todaysDate, animals, forms){
    $scope.customers;
    $scope.animals = animals;
    $scope.formValues = {};
    $scope.formValues.total = 0;

    $scope.animalType = function(animal) {
      var formVars = angular.copy(forms[animal]);
      $scope.forms = formVars.forms;
      $scope.animal_type = animal;
      console.log(formVars.pricePerPound);


      $scope.formValues.pricePerPound = formVars.pricePerPound;
      $scope.formValues.minPrice      = formVars.minPrice;
      $scope.formValues.total         = formVars.pricePerPound * $scope.formValues.weight;
    }

    $scope.totalCost = function() {
      if($scope.formValues.minPrice == undefined || $scope.formValues.pricePerPound == undefined) {
        return "";
      } else {
        var total;
        $scope.formValues.minPrice > $scope.formValues.pricePerPound * $scope.formValues.weight || $scope.formValues.weight == undefined ? total = $scope.formValues.minPrice : total = $scope.formValues.pricePerPound * $scope.formValues.weight;
        return total;
      }
    }


    // $scope.animal_weight*$scope.pricePerPound < $scope.formValues.minPrice ? $scope.formValues.total = $scope.formValues.minPrice : $scope.formValues.total = $scope.formValues.pricePerPound * $scope.formValues.weight;    

    // $scope.animalType = function(animal) {

      // $scope.forms = forms[animal];


      // $scope.forms = new Animal();

      // $scope.animal_type = animal;
      
      // console.log($scope.forms);
    //   $scope.forms = forms[animal];

    //   var obj = JSON.parse($scope.forms);
    //   Object.create(SuperClass.prototype);
    //   $scope.forms.animal = $scope.animal_type;
    //   $scope.forms.customer_id = $scope.customer_id;
    //   $scope.forms.created = todaysDate;
    // }



    // customersService.get()
    //   .success(function(data){
    //     $scope.customers = data;
    //   });

      

    $scope.submit = function () {

      $scope.master = angular.copy(forms);


      console.log($scope.master);

      // if ($scope.forms) {
      //     // call the create function from our service (returns a promise object)
      //     console.log($scope.forms);
      //     instructionsService.create($scope.forms)
      //       // if successful creation, call our get function to get all the new todos
      //       .success(function(data) {
      //         console.log("success");
      //         $scope.forms = {}; // clear the form so our user is ready to enter another
      //         instructionsService.get()
      //         .success(function(data){
      //           $scope.$parent.instructions = data;
      //         });

      //         $element.remove();
      //       });
      //     }
        }


    $scope.remove = function(){
      $element.remove();
    }
  })

  ;