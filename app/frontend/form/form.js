'use strict';

angular.module('thesisApp.form', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'form/form.html',
    controller: 'FormCtrl'
  });
}])

.controller('FormCtrl', ['$scope', '$state', function($scope, $state) {
  $scope.info = {
    eyes: {
      myopia: {},
      hyperopia: {},
      astigmatism: {}
    }
  };

  $scope.gender = ["Kobieta", "Mężczyzna"];

  $scope.eyes = {
    myopia: "krótkowzroczność",
    hyperopia: "dalekowzroczność",
    astigmatism: "astygmatyzm",
    dichromatism: "dichromatyzm",
    trichromatism: "trichromatyzm",
    monochromatism: "monochromatyzm"
  };

  $scope.goToEtdrs = function () {
    $state.go("letters", {info: $scope.info});
  };
}]);