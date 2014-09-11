'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
	.factory('customers', function(){
		var customers = [{
			indexkey: 	1, 
			first_name: 'Bob',
			last_name:  'Smith',
			phone: 			'8888888888',
			email: 			'bob@gmail.com'
		},{
			indexkey:	   2,
			first_name: 'Adrian',
			last_name:  'Miller',
			phone: 			'530,403.9837',
			email: 			'adrian@gmail.com'
		},{
			indexkey:	   3,
			first_name: 'Airan',
			last_name:  'Scruby',
			phone: 			'530,403.9837',
			email: 			'airan@gmail.com'
		},{
			indexkey:	   4,
			first_name: 'Lisa',
			last_name:  'Simpson',
			phone: 			'530,403.9837',
			email: 			'adrian@gmail.com'
		}];
		return customers;
	})

	.factory('customerIndex', function(){
		return 4;
	})

	.factory('pages', function(){
		return [{
        name: 'Home',
        url: 'home'
      },{
        name: 'Customers',
        url: 'customers'
      },{
        name: 'Cutting Instructions',
        url: 'cutting_instructions'
      }]
	})
	;
