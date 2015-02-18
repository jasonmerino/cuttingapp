angular.module("myApp.templates", []).

  run(['$templateCache', function($templateCache, $scope) {
  $templateCache.put("select",
    "<div class=\"col-md-12\">" +
      "<select class=\"form-control\" name=\"{{ id }}\" ng-init=\"id = $id\" ng-model=\"formValues.values[form.model]\" ng-options=\"option for option in form.values\">" +
      "</select>\n"+
    "</div>"
    );
  }])

  .run(['$templateCache', function($templateCache) {
    $templateCache.put("radio",
      "<div class=\"col-md-12\">" +
        "<label for=\"{{ id }}\" ng-init=\"id = $id\" class=\"radio-inline\" ng-repeat=\"value in form.values\">" + 
        "<input name=\"{{ id }}\" id=\"{{ id }}\" type=\"radio\" ng-model=\"formValues.values[form.model]\" value=\"{{ value }}\"> {{ value }}" +
        "</label>" +
      "</div>"
      );
  }])

  .run(['$templateCache', function($templateCache) {
    $templateCache.put("checkbox",
      "<div class=\"col-md-12\">" +
        "<label for=\"{{ id }}\" ng-init=\"id = $id\" class=\"checkbox-inline\" ng-repeat=\"value in form.values\">" +
        "<input name=\"{{ id }}\" id=\"{{ id }}\" type=\"checkbox\" checklist-model=\"formValues.values[form.model]\" checklist-value=\"value\"> {{ value }}" +
        "</label>" +
      "</div>"
      );
  }])

  .run(['$templateCache', function($templateCache) {
    $templateCache.put("text",
      "<div class=\"col-md-12\" >" +
        "<input name=\"{{ id }}\" id=\"{{ id }}\" type=\"text\" ng-model=\"formValues.values[form.model]\" checklist-value=\"value\"> {{ value }}" +
      "</div>"
      );
  }])

  .run(['$templateCache', function($templateCache) {
    $templateCache.put("textarea",
      "<div class=\"col-md-12\" >" +
        "<textarea name=\"{{ id }}\" id=\"{{ id }}\" style=\"width: 100%\" rows=\"10\" ng-model=\"formValues.values[form.model]\"></textarea>" +
      "</div>"
      );
  }])

  .run(['$templateCache', function($templateCache) {
    $templateCache.put("thickness-number",
      "<div class=\"col-md-4\">" +
        "<select class=\"form-control\" ng-model=\"formValues.values[form.model].number\" ng-options=\"a for a in [1,2,3,4,5,6,7,8,9,10]\">" +
          "<option value=\"\">--Number--</option>" +
        "</select>" +
      "</div>" +
      "<div class=\"col-md-4\">" +
        "<select class=\"form-control\" ng-model=\"formValues.values[form.model].thickness\" ng-options=\"a for a in [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2]\">" +
          "<option value=\"\">--Thickness--</option>" +
        "</select>" +
      "</div>" +
      "<div class=\"col-md-4\">" +
        "<label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"formValues.values[form.model].boneIn\" ng-true-value=\"Yes\" ng-false-value=\"No\"> Bone In</label>" +
      "</div>"
      );
  }])

  .run(['$templateCache', function($templateCache) {
    $templateCache.put("thickness-number-boneless",
      "<div class=\"col-md-4\">" +
        "<select class=\"form-control\" ng-model=\"formValues.values[form.model].number\" ng-options=\"a for a in [1,2,3,4,5,6,7,8,9,10]\">" +
          "<option value=\"\">--Number--</option>" +
        "</select>" +
      "</div>" +
      "<div class=\"col-md-4\">" +
        "<select class=\"form-control\" ng-model=\"formValues.values[form.model].thickness\" ng-options=\"a for a in [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2]\">" +
          "<option value=\"\">--Thickness--</option>" +
        "</select>" +
      "</div>" +
      "<div class=\"col-md-4\">" +
        "<label class=\"checkbox-inline\"><input type=\"checkbox\" ng-model=\"formValues.values[form.model].boneless\" ng-true-value=\"Yes\" ng-false-value=\"No\">Boneless</label>" +
      "</div>"
      );
  }])

  .run(['$templateCache', function($templateCache) {
    $templateCache.put("pork-steaks",
      "<div class=\"col-md-4\">" +
        "<select class=\"form-control\" ng-model=\"formValues.values[form.model].number\" ng-options=\"a for a in [1,2,3,4,5,6,7,8,9,10]\">" +
          "<option value=\"\">--Number--</option>" +
        "</select>" +
      "</div>" +
      "<div class=\"col-md-4\">" +
        "<select class=\"form-control\" ng-model=\"formValues.values[form.model].thickness\" ng-options=\"a for a in [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2]\">" +
          "<option value=\"\">--Thickness--</option>" +
        "</select>" +
      "</div>"
      );
  }])

  .run(['$templateCache', function($templateCache) {
    $templateCache.put("checkbox-custom",
      "<div class=\"col-md-12\">" +
        "<label for=\"{{ id }}\" ng-init=\"id = $id\" class=\"checkbox-inline\" ng-repeat=\"value in form.values\">" +
        "<input name=\"{{ id }}\" id=\"{{ id }}\" type=\"checkbox\" checklist-model=\"formValues.values[form.model]\" checklist-value=\"value\"> {{ value }}" +
      "</label>" +
        "<input type=\"checkbox\" ng-init=\"custom = 1\" checklist-model=\"formValues.values[form.model]\" checklist-value=\"custom\"><input type=\"text\" ng-model=\"custom\">"+
      "</div>"
      );
  }])

  .run(['$templateCache', function($templateCache) {
    $templateCache.put("amount-number",
      "<div class=\"col-md-4\">" +
        "<select class=\"form-control\" ng-model=\"formValues.values[form.model]\" ng-options=\"a for a in [1,2,3,4,5,6,7,8,9,10]\">" +
          "<option value=\"\">--Amount--</option>" +
        "</select>" +
      "</div>" +
      "<div class=\"col-md-4\">" +
        "<select class=\"form-control\" ng-model=\"formValues.values[form.model]\" ng-options=\"a for a in [1,2,3,4,5,6,7,8,9,10]\">" +
          "<option value=\"\">--Number--</option>" +
        "</select>" +
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