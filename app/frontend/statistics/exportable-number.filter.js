'use strict';

angular.module('colOpt.statistics')

  .filter('exportableNumber', function() {
    return function(input) {
      if(typeof input === 'number')
        input = input.toString();
      return input.replace('.',',');
    }
  });