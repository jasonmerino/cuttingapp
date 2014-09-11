angular.module("myApp.templates", []).

  run(['$templateCache', function($templateCache, $scope) {
  $templateCache.put("select",
    "<select class=\"form-control\" ng-model=\"formVars[model]\" ng-options=\"option.name for option in formVars.values\"></select>\n" +
    "<span ng-bind=\"formVars[model]\"></span>" +
    "</div>");
  }])

  .run(['$templateCache', function($templateCache) {
    $templateCache.put("radio",
      "<label ng-repeat=\"form in formVars.values\" class=\"radio-inline\"><input type=\"radio\" ng-model=\"formVars[model]\" value=\"{{ form.value }}\"> {{form.name}}</label>");
  }])

  .run(['$templateCache', function($templateCache) {
    $templateCache.put("checkbox",
      "<label ng-repeat=\"checkbox in formVars.values\" class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"model\" ng-true-value=\"yes\" ng-false-value=\"no\"> {{ checkbox.name }}</label>"
      );
  }])

  .run(['$templateCache', function($templateCache) {
    $templateCache.put("number",
      "<div ng-controller=\"numberCtrl\" class=\"form-input-number\">"+
        "<button ng-click=\"increment(formVars.values[1].value)\">+</button>"+
        "<input class=\"form-control\" type=\"text\" class=\"form-input-value\" ng-init=\"value = formVars.values[0].value\" type=\"text\" value=\"{{value}}\"></input>" +
        "<button ng-click=\"decrement(formVars.values[0].value)\">-</button>"+
      "</div>"
      );
  }])

  .run(['$templateCache', function($templateCache) {
    $templateCache.put("select.thickness",
      "<select class=\"form-control\" ng-model=\"formVars[model]\" ng-controller=\"selectThicknessCtrl\" ng-options=\"option.name for option in formVars.values\"></select>"
      );
  }])

  .run(['$templateCache', function($templateCache) {
    $templateCache.put("select.weight",
      "<select class=\"form-control\" ng-model=\"formVars[model]\" ng-controller=\"selectWeightCtrl\" ng-options=\"option.name for option in pounds\"></select>"
      );
  }])

  .run(['$templateCache', function($templateCache) {
    $templateCache.put("select.number",
      "<select class=\"form-control\" ng-model=\"formVars[model]\" ng-controller=\"selectNumberCtrl\" ng-options=\"option.name for option in pounds\"></select>"
      );
  }])

  .run(['$templateCache', function($templateCache) {
    $templateCache.put("textarea",
      "<textarea class=\"form-control\" cols=\"50\" rows=\"10\"ng-model=\"formVars[model]\" ng-controller=\"textarea\"></textarea>"
      );
  }])
  ;