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
      var formVars = scope.form;                                                                                                                                                                                                                          
      if(!formVars.templateUrl == '') {
        var tplUrl = formVars.templateUrl;
        $http.get(tplUrl, {cache: $templateCache}).success(function(tplContent){
           element.replaceWith($compile(tplContent)(scope));
        });
      }
    }

    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: false,
      link: linker
    };
  }])

  .directive('mainMenu', function(){
    return {
      templateUrl: 'partials/shared.header.html'
    }
  })

  .directive('outputTemplate', function($http, $templateCache, $compile){
    var linker = function (scope, element, attrs) {
      if(!scope.formVars.templateUrl == "") {
        var tplUrl = [scope.formVars.templateUrl];
        console.log(scope.formVars.templateUrl);
        $http.get(tplUrl, {cache: $templateCache}).success(function(tplContent){
           element.replaceWith($compile(tplContent.trim())(scope));
        });
      }
    }

    return {
      restrict: 'E',
      scope: {
        formVars: "="
      },
      link: linker
    }
  })

  .directive('uiModal', function($http, $templateCache, $compile){
    var linker = function (scope, element, attrs) {
      $http.get(attrs.modalTemplate, {cache: $templateCache}).success(function(tplContent){
         element.replaceWith($compile(tplContent.trim())(scope));
      });
    }

    return {
      scope: {
        modalTemplate: "="
      },
      link: linker
    }
  })

  .directive('ngReallyClick', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                var message = attrs.ngReallyMessage;
                if (message && confirm(message)) {
                    scope.$apply(attrs.ngReallyClick);
                }
            });
        }
    }
  }])

  ;