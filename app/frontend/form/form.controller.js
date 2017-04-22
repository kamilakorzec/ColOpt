'use strict';

angular.module('colOpt.form')

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