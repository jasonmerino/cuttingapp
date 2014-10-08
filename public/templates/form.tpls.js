angular.module("myApp.templates", []).

  run(['$templateCache', function($templateCache, $scope) {
  $templateCache.put("select",
    "<select class=\"form-control\" name=\"{{formVars[model]}}\" ng-model=\"formVars[model]\" ng-options=\"option.value as option.name for option in formVars.values\">" +
    "</select>\n"
    );
  }])

  .run(['$templateCache', function($templateCache) {
    $templateCache.put("radio",
      "<div class=\"form-group\">" +
      "<label for=\"{{ id }}\" ng-init=\"id = $id\" class=\"radio-inline\" ng-repeat=\"value in formVars.values\">" + 
      "<input name=\"{{ id }}\" id=\"{{ id }}\" type=\"radio\" ng-model=\"formVars.model\" value=\"{{ value }}\"> {{ value }}" +
      "</label>" +
      "</div>"
      );
  }])

  .run(['$templateCache', function($templateCache) {
    $templateCache.put("checkbox",
      "<div class=\"form-group\">" +
      "<label for=\"{{ id }}\" ng-init=\"id = $id\" class=\"checkbox-inline\" ng-repeat=\"value in formVars.values\">" +
      "<input name=\"{{ id }}\" id=\"{{ id }}\" type=\"checkbox\" checklist-model=\"formVars.model\" checklist-value=\"value\"> {{ value }}" +
      "</label>" +
      "</div>"
      );
  }])

  // .run(['$templateCache', function($templateCache) {
  //   $templateCache.put("number",
  //     "<div ng-controller=\"numberCtrl\" class=\"input-group form-number\">"+
  //       "<button ng-click=\"increment(formVars.values[1].value)\">+</button>"+
  //       "<input class=\"form-control\" type=\"text\" class=\"form-input-value\" ng-init=\"value = formVars.values[0].value\" type=\"text\" value=\"{{value}}\"></input>" +
  //       "<button ng-click=\"decrement(formVars.values[0].value)\">-</button>"+
  //     "</div>"
  //     );
  // }])

  // .run(['$templateCache', function($templateCache) {
  //   $templateCache.put("select.thickness",
  //     "<select ng-model=\"formVars[model]\" ng-controller=\"selectThicknessCtrl\" ng-options=\"option.name for option.value in formVars.values\"></select>"
  //     );
  // }])

  // .run(['$templateCache', function($templateCache) {
  //   $templateCache.put("select.weight",
  //     "<select ng-model=\"formVars[model]\" ng-controller=\"selectWeightCtrl\" ng-options=\"option.value as option.name for option in pounds\"></select>"
  //     );
  // }])

  // .run(['$templateCache', function($templateCache) {
  //   $templateCache.put("select.number",
  //     "<select class=\"form-control\" ng-model=\"formVars[model]\" ng-controller=\"selectNumberCtrl\" ng-options=\"option.value as option.name for option in pounds\"></select>"
  //     );
  // }])

  // .run(['$templateCache', function($templateCache) {
  //   $templateCache.put("textarea",
  //     "<textarea class=\"form-control\" cols=\"50\" rows=\"10\"ng-model=\"formVars[model]\" ng-controller=\"textarea\"></textarea>"
  //     );
  // }])
  ;