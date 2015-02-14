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
      },{
        name: 'New Cuttinginstruction',
        url: 'new_cuttinginstructions'
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
	.factory('animals', function(){
		return {
			'deer': {
        name: "Deer",
        form: "wildgame.json"
      },
      'antelope': {
        name: "Antelope",
        form: "wildgame.json"
      },
      'caribu': {
        name: "Caribu",
        form: "wildgame.json"
      },
      'wildhog': {
        name: "Wild Hog",
        form: "wildgame.json"
      },
      'bear': {
        name: "Bear",
        form: "bear.json"
      },
      'sheep': {
      	name: "Sheep",
        form: "wildgame.json"
      },
      'bufflo': {
       	name: "Buffalo",
        form: "wildgame.json"
      },
      'oryx': {
        name: "Oryx",
        form: "wildgame.json"
      },
      'duckpheasantgoose': {
        name: "Duck/Pheasant/Goose",
        form: "foul.json"
      },
      'hog': {
	      name: "Hog",
	      form: "hog.json"
      },
      'goat': {
        name: "Goat",
        form: "caprinae.json"
      },
      'lamb': {
        name: "Lamb",
        form: "caprinae.json"
      },
      'beef': {
        name: "Beef",
        form: "beef.json"
      }
    };
	})

	.factory('formsService', function($http){
		return {
			get 	 : function(tplUrl) {
				return $http.get('forms/' + tplUrl);
			}
		}
	})
  .factory('loginService', function($http){
    return {
      login   : function(creds) {
        return $http.post('api/login', { username: creds.username, password: creds.password })
      }
    }
  })
  ;


  // $scope.login = function(){
  //     $http.post('api/login', {
  //       username: $scope.user.username,
  //       password: $scope.user.password,
  //     })
  //     .success(function(user){
  //       // No error: authentication OK
  //       console.log('Authentication successful!')
  //       $location.url('home');
  //     })
  //     .error(function(){
  //       // Error: authentication failed
  //       console.log('Authentication failed.');
  //       $location.url('api/login');
  //     });
  //   };