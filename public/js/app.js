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
.config(function($stateProvider, $urlRouterProvider) {
	
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
		}
	})
	
	.state('customers',{
		url: '/customers',
		templateUrl: 'pages/customers.html',
		controller: 'customersCtrl',
		data: {
			name: 'Customers',
			slug: 'customers'
		}
	})

	.state('customer',{
		url: '/customer/:cust_id',
		templateUrl: 'pages/customer.html',
		controller: 'customerCtrl',
		data: {
			name: 'Customer',
			slug: 'customer'
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
		}
	})
	
	.state('new_cuttinginstructions', {
		url: '/cutting_instructions/new/:forms_id',
		data: {
			name: 'New Cutting Instructions',
			slug: 'cutting-new'
		},
		views: {
			'': {
				templateUrl: 'pages/new.instructions.html',
				controller: 'newInstructionsCtrl'
			}
		}
	})
	$urlRouterProvider.otherwise('/');
})
	.run(function($rootScope, $http){
    $rootScope.message = '';

    // Logout function is available in any pages
    $rootScope.logout = function(){
      $rootScope.message = 'Logged out.';
      $http.post('api/logout');
    };
  });

// our controller for the form
// =============================================================================
