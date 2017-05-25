'use strict';

angular.module('colOpt.statistics')

  .controller('StatsCtrl', [ '$scope', '$data', 'Colors', '$state', function($scope, $data, Colors, $state) {
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