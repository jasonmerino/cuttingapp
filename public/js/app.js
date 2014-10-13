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
	
		// route to show our basic form (/form)
	.state('home', {
		url: '/',
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
		url: '/instructions/:inst_id',
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
});

// our controller for the form
// =============================================================================
