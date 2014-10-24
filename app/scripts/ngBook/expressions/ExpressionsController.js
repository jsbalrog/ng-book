'use strict';

angular.module('myApp.expressions', []).controller('ExpressionsCtrl', function($scope, $parse, $interpolate) {

  $scope.person = {
    name: "T J"
  };

  $scope.$watch('expr', function(newVal, oldVal, scope) {
    if(newVal !== oldVal) {
      var parseFun = $parse(newVal);
      // Get the value of the parsed expression
      $scope.parsedValue = parseFun(scope);
    }
  });

  $scope.$watch('emailBody', function(body) {
    if(body) {
      var template = $interpolate(body);
      $scope.previewText = template({ to: $scope.to });
    }
  })

});
