'use strict';

angular.module('colOpt.statistics')

  .controller('StatsCtrl', [ '$scope', function($scope) {
    function getResults() {
    }

    getResults();

    $scope.toBeginning = function () {
        $state.go('form', {}, {refresh: true});
    }
  }]);