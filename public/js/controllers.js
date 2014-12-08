'use strict';

/* Controllers */

angular.module('myApp.controllers', []).controller('app', function($scope, $rootScope, $http, $location, animals) {
   $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
        $scope.pageClass = toState.data.slug;
    });

    // Logout function is available in any pages
    $rootScope.logout = function(){
    	console.log("success");
      $http.post('api/logout');
      $location.url('/');
    };
    
  })
  .controller('headerCtrl', ['$scope', '$state', 'pages', 'animals', function($scope, $state, pages, animals) {
    $scope.animals = animals;
  }]);