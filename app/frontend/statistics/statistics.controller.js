'use strict';

angular.module('colOpt.statistics')

  .controller('StatsCtrl', [ '$scope', '$data', 'Colors', function($scope, $data, Colors) {
    function getResults() {
      $scope.lambdas = Colors;
      $data.get()
        .then(function(results){
          $scope.data = results.data;
        })
    }

    getResults();

    $scope.toBeginning = function () {
      $state.go('form', {}, {refresh: true});
    }
  }]);