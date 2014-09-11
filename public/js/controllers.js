'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  
  .controller('app', function($scope, $rootScope) {
   $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
        $scope.pageClass = toState.data.slug;
        console.log(toState.data.slug);
    });
  })

  .controller('home', function($scope, $stateParams, $state, $rootScope) {
    $scope.pageName = $state.current.data.name;
    $rootScope.active = $state.current.data.name;
    $scope.customers = {
      name: "Test"
    };
  })

  .controller('headerCtrl', ['$scope','$state', 'pages', function($scope, $state, pages) {
    $scope.pages = pages;
  }])

  .controller('customersCtrl', function($scope, customers, customerIndex, UsStates){
    $scope.customers = customers;
    $scope.UsStates = UsStates;
    console.log($scope.UsStates);
    $scope.submit = function() {
      if ($scope.first_name && $scope.last_name && $scope.phone && $scope.email) {
        var customer = {
          indexkey:   getIndexKey(),
          first_name: $scope.first_name,
          last_name:  $scope.last_name,
          phone:      $scope.phone,
          email:      $scope.email
        }
        customers.push(customer);
        
        // console.log($scope.customers);
      }

      function getIndexKey() {
        return customerIndex ++;
      }
    };
    $scope.clearForm = function(form) {
      $scope.filterCustomers = null;
    }
    $scope.removeCustomer = function(value) {
      console.log(value);
      for (var i=0; i<customers.length; i++) {
        if (customers[i].indexkey === value) {
            customers.splice(i, 1);
        }
      }
    }
  })

  .controller('cuttingInstructionsCtrl', function($scope, $stateParams, $state, $filter, $log, $rootScope, customers) {
  	$scope.animals   = animals;
    $scope.total     = 0;
    $scope.customers = customers;


  	$scope.changeSelect = function(name, slug) {
      console.log(slug); 		
  		$state.go(slug);
      console.log($stateParams.id);  
  	};

  	$scope.toggleClass = function(toggle) {
  		$scope[toggle] ? $scope[toggle] = false : $scope[toggle] = true;
  	}

  	var keys = Object.keys(lamb);
  	for(var i=0; i<keys.length; i++) {
  		lamb[keys[i]] == '' ? $scope[keys[i]] = '' : $scope[keys[i]] = lamb[keys[i]];
  	}

    $scope.totalCost = function(addTotal) {
      $scope.total = addTotal;
    }
  })

  .controller('wildgame', function($scope, $stateParams, $state, $filter){
    $scope.forms = forms[$state.current.data.name];
  })

  .controller('selectThicknessCtrl', function($scope, $stateParams, $state, $filter){
    $scope.pounds = [
      { name: '1/4 in',  value: '.25'},
      { name: '1/3 in',  value: '.33'},
      { name: '1/2 in',  value: '.5'},
      { name: '2/3 in',  value: '.33'},
      { name: '3/4 in',  value: '.75'},
      { name: '1 in',    value: '1'},
      { name: '1-1/4 in', value: '1.25'},
      { name: '1-1/3 in', value: '1.33'},
      { name: '1-1/2 in', value: '1.5'},
      { name: '1-2/3 in', value: '1.66'},
      { name: '1-3/4 in', value: '1.75'},
      { name: '2 in',     value: '2'},
      { name: '2-1/4 in',  value: '2.25'},
      { name: '2-1/3 in',  value: '2.33'},
      { name: '2-1/2 in',  value: '2.5'}
    ]
  })

  .controller('selectWeightCtrl', function($scope, $stateParams, $state, $filter){
    $scope.pounds = [
      { name: '1/2 lb',  value: '.5'},
      { name: '1 lb',  value: '1'},
      { name: '1-1/2 lb',  value: '1.5'},
      { name: '2 lb',  value: '2'}
    ]
  })

  .controller('numberCtrl', function($scope, $rootScope){
    $scope.increment = function(max) {
      $scope.value < max ? $scope.value ++ : $scope.value = $scope.value;
    }  
    $scope.decrement = function(min) {
      $scope.value > min ? $scope.value -- : $scope.value = $scope.value;
    }
  })

  .controller('costCtrl', function($scope){
    $scope.totalCost($scope.forms.minPrice);
    $scope.change = function(min, perPound) {
      min > ($scope.weight * perPound) ? $scope.cost = min : $scope.cost = $scope.weight * perPound;
      $scope.totalCost($scope.cost);
    }
  })

  .controller('textarea', function($scope){
  })

  .controller('radioCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
  }])
  ;