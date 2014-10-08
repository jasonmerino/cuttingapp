'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
	.factory('customersService', function($http){
		return {
			get 	 : function(id) {
				if(id === undefined) {
					return $http.get('/api/customers');
				} else {
					return $http.get('/api/customers/' + id);
				}
			},
			create : function(customerData) {
				return $http.post('/api/customers', customerData);
			},
			update : function(id, customerData) {
				return $http.put('/api/customers/' + id, customerData)
			},
			delete : function(id) {
				return $http.delete('/api/customers/' + id);
			}
		}
	})
	.factory('instructionsService', function($http){
		return {
			get 		: function(id) {
				if(id === undefined) {
					return $http.get('/api/instructions');
				} else {
					return $http.get('/api/instructions/' + id);
				}
			},
			create : function(instructionData) {
				return $http.post('/api/instructions', instructionData);
			},
			update : function(id, instructionData) {
				return $http.put('/api/instructions/' + id, instructionData)
			},
			delete : function(id) {
				return $http.delete('/api/instructions/' + id);
			}
		}
	})
	.factory('pages', function(){
		return [{
        name: 'Home',
        url: 'home'
      },{
        name: 'Instructions',
        url: 'instructions'
      },{
        name: 'Customers',
        url: 'customers'
      }]
	})
	.factory('todaysDate', function(){
		var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();

      if(dd<10) {
          dd='0'+dd
      } 

      if(mm<10) {
          mm='0'+mm
      } 

      return today = mm+'/'+dd+'/'+yyyy;
	})
	// .service('forms', function(){
	// 	return {
	// 			'Antelope': {
	// 				templateUrl: 		'partials/cuttingforms/wildgame.html',
	// 				pricePerPound: 	1.30,
	// 				minPrice: 			130
	// 		}
	// 	}
	// })
	.factory('animals', function(){
		return [{
	      slug: "hog",
	      name: "Hog"
      },
      {
        slug: "deer",
        name: "Deer"
      },
      {
        slug: "antelope",
        name: "Antelope"
      },
      {
        slug: "wildhog",
        name: "Wild Hog"
      },
      {
        slug: "bear",
        name: "Bear"
      },
      {
        slug: "sheep",
        name: "Sheep"
      },
      {
        slug: "buffalo",
        name: "Buffalo"
      },
      {
        slug: "duckpheasantgoose",
        name: "Duck/Pheasant/Goose"
      },
      {
        slug: "goat",
        name: "Goat"
      },
      {
        slug: "lamb",
        name: "Lamb"
      },
      {
        slug: "beef",
        name: "Beef"
      },
      {
        slug: "oryx",
        name: "Oryx"
      },
      {
        slug: "caribu",
        name: "Caribu"
      }
    ];
	})



.service('forms', function(){
		return {
				'Antelope': {
					pricePerPound: 1.3,
					minPrice: 130,
					customer_id: '',
		      animal: '',
		      weight: '',
		      price: '',
		      created: '',
		      completed: '',
					forms: [{
						name: 'Backstraps',
						templateUrl: 'checkbox',
						model: '',
						values: [
							'Chops',
							'Roasts',
							'Grind'
							]
						},{
							name: 'Tenerloins',
							templateUrl: 'radio',
							model: '',
							values: [
								'Yes',
								'No',
								'Missing',
								'Could not be saved'
							]
						},{
							name: 'Steaks',
							templateUrl: 'checkbox',
							model: '',
							values: [
								'Tenderized',
								'Regular',
								'Roasts',
								'Grind'
							]
						},{
							name: 'Stew',
							templateUrl: '',
							model: '',
							values: []
						}]
					},
		}
	});