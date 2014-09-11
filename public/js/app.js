'use strict';

angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'ngUsStates',
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
				templateUrl: 'partials/home.html',
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
		templateUrl: 'partials/customers/customers.html',
		controller: 'customersCtrl',
		data: {
			name: 'Customers',
			slug: 'customers'
		}
	})
	.state('cutting_instructions', {
		url: '/cutting_instructions/:id',

		data: {
			name: 'Cutting Instructions',
			slug: 'cutting-instructions'
		},
		views: {
			'': {
				templateUrl: 'partials/cutting.instructions.html',
				controller: 'cuttingInstructionsCtrl'
			}
		}
	})
	.state('cutting_instructions.antelope', {
		url: '/antelope',
		templateUrl: 'partials/cuttingforms/wildgame.html',
		controller: 'wildgame',
		data: {
			name: 'Antelope',
			slug: 'antelope'
		}
	})
	.state('cutting_instructions.bear', {
		url: '/bear',
		templateUrl: 'partials/cuttingforms/wildgame.html',
		data: {
			name: 'Bear'
		},
		controller: 'wildgame'
	})
	.state('cutting_instructions.buffalo', {
		url: '/buffalo',
		templateUrl: 'partials/cuttingforms/wildgame.html',
		data: {
			name: 'Buffalo'
		}
	})
	.state('cutting_instructions.deer', {
		url: '/deer',
		templateUrl: 'partials/cuttingforms/wildgame.html',
		data: {
			name: 'Deer'
		}
	})
	.state('cutting_instructions.wildhog', {
		url: '/wildhog',
		templateUrl: 'partials/cuttingforms/wildgame.html',
		data: {
			name: 'Wild Hog'
		}
	})
	.state('cutting_instructions.sheep', {
		url: '/sheep',
		templateUrl: 'partials/cuttingforms/wildgame.html',
		data: {
			name: 'Sheep'
		}
	})
	.state('cutting_instructions.caribu', {
		url: '/caribu',
		templateUrl: 'partials/cuttingforms/wildgame.html',
		data: {
			name: 'Caribu'
		}
	})
	.state('cutting_instructions.oryx', {
		url: '/oryx',
		templateUrl: 'partials/cuttingforms/wildgame.html',
		data: {
			name: 'Oryx'
		}
	})
	.state('cutting_instructions.duckpheasantgoose', {
		url: '/duckpheasantgoose',
		// 
		views: {
			'': {
				templateUrl: 'partials/cuttingforms/duckpheasantgoose.html'
			},
			'salami': {
				templateUrl: 'partials/products/products.salami.html'
			}
		},
		data: {
			name: 'Duck Phaseant Goose'
		}
	})
	.state('cutting_instructions.beef', {
		url: '/beef',
		templateUrl: 'partials/cuttingforms/beef.html',
		data: {
			name: 'Beef'
		}
	})
	.state('cutting_instructions.goat', {
		url: '/goat',
		templateUrl: 'partials/cuttingforms/caprinae.html',
		data: {
			name: 'Goat'
		}
	})
	.state('cutting_instructions.lamb', {
		url: '/lamb',
		templateUrl: 'partials/cuttingforms/caprinae.html',
		data: {
			name: 'Lamb'
		}
	})
	.state('cutting_instructions.hog', {
		url: '/hog',
		templateUrl: 'partials/cuttingforms/hog.html',
		data: {
			name: 'Hog'
		}
		// controller: 'hog'
	})
	.state('products', {
		parent: 'form',
		templateUrl: 'partials/products/products.salami.html'
	})

	.state('estimate', {
		parent: 'home',
		templateUrl: 'partials/estimate/products.salami.html'
	})
	;
		
		// nested states 
		// each of these sections will have their own view
		// url will be nested (/form/profil;
		
	// catch all route
	// send users to the form page 
	$urlRouterProvider.otherwise('/');
});

// our controller for the form
// =============================================================================
