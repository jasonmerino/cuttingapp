'use strict';

angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'ngUsStates',
  'checklist-model',
  'ui.bootstrap',
  'confirmClick',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'myApp.templates'
])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

	var checkLoggedin = function($q, $timeout, $http, $location, $rootScope){
    // Initialize a new promise
    var deferred = $q.defer();
    $rootScope.loggedIn = false;

    // Make an AJAX call to check if the user is logged in
    $http.get('api/loggedin').success(function(user){
      // Authenticated
      if (user !== '0') {
        $timeout(deferred.resolve, 0);
      	$rootScope.loggedIn = true;

      // Not Authenticated
      } else {
      	$rootScope.loggedIn = false;
        $rootScope.message = 'You need to log in.';
        $timeout(function(){deferred.reject();}, 0);
        $location.url('/login');
      }
    });

    return deferred.promise;
  };
  //================================================
  
  //================================================
  // Add an interceptor for AJAX errors
  //================================================
  $httpProvider.responseInterceptors.push(function($q, $location) {
    return function(promise) {
      return promise.then(
        // Success: just return the response
        function(response){
          return response;
        }, 
        // Error: check the error status to get only the 401
        function(response) {
          if (response.status === 401)
            $location.url('/login');
          return $q.reject(response);
        }
      );
    }
  });
	
	$stateProvider
	.state('login', {
		url: '/',
		views: {
			'': {
				templateUrl: 'pages/login.html',
				controller: 'login',
			}
		},	
		data: {
			name: 'Login',
			slug: 'login'
		}
	})
		// route to show our basic form (/form)
	.state('home', {
		url: '/home',
		views: {
			'': {
				templateUrl: 'pages/home.html',
				controller: 'home',
			}
		},	
		data: {
			name: 'Home',
			slug: 'home'
		},
		resolve: {
      loggedin: checkLoggedin
    }
	})
	
	.state('customers',{
		url: '/customers',
		templateUrl: 'pages/customers.html',
		controller: 'customersCtrl',
		data: {
			name: 'Customers',
			slug: 'customers'
		},
		resolve: {
      loggedin: checkLoggedin
    }
	})

	.state('customer',{
		url: '/customer/:cust_id',
		templateUrl: 'pages/customer.html',
		controller: 'customerCtrl',
		data: {
			name: 'Customer',
			slug: 'customer'
		},
		resolve: {
      loggedin: checkLoggedin
    }
	})

	.state('instructions', {
		url: '/instructions',
		data: {
			name: 'Cutting Instructions',
			slug: 'instructions'
		},
		views: {
			'': {
				templateUrl: 'pages/instructions.html',
				controller: 'instructionsCtrl'
			}
		},
		resolve: {
      loggedin: checkLoggedin
    }
	})

	.state('instruction', {
		url: '/instruction/:inst_id',
		data: {
			name: 'Cutting Instruction',
			slug: 'instruction'
		},
		views: {
			'': {
				templateUrl: 'pages/instruction.html',
				controller: 'instructionCtrl'
			}
		},
		resolve: {
      loggedin: checkLoggedin
    }
	})
	
	.state('newCusttingInstructions', {
		url: '/new/:forms_id',
		data: {
			name: 'New Cutting Instructions',
			slug: 'cutting-new'
		},
		views: {
			'': {
				templateUrl: 'pages/new.instructions.html',
				controller: 'newInstructionsCtrl'
			}
		},
		resolve: {
      loggedin: checkLoggedin
    }
	})
	$urlRouterProvider.otherwise('/');
});