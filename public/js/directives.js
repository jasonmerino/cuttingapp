'use strict';

/* Directives */

angular.module('myApp.directives', [])
  .directive('pageName', ['$state', '$rootScope', function($state, $rootScope) {
    return {
      link: function (scope, element, attrs) {
        element.html( $state.current.data.name );
      }
    }
  }])
  .directive('formTemplate', ['$http', '$templateCache', '$compile', function($http, $templateCache, $compile) {

    var linker = function (scope, element, attrs) {
      var tplUrl = [scope.formVars.templateName];
      $http.get(tplUrl, {cache: $templateCache}).success(function(tplContent){
         element.replaceWith($compile(tplContent.trim())(scope));
      });
    }

    return {
      restrict: 'E',
      replace: true,
      scope: {
        formVars: "="
      },
      link: linker
    };
  }]).directive('mainMenu', function(){
    return {
      templateUrl: 'partials/header.html'
    }
  })

  ;