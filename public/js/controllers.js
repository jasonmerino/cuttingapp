'use strict';

/* Controllers */

angular.module('myApp.controllers', []).controller('app', function($scope, $rootScope) {
   $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
        $scope.pageClass = toState.data.slug;
    });
  })
  .controller('headerCtrl', ['$scope','$state', 'pages', 'animals', function($scope, $state, pages, animals) {
    $scope.animals = animals;
  }]);