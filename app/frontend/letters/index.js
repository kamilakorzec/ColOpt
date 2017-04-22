'use strict';

angular.module('colOpt.letters', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/letters', {
      templateUrl: 'letters/letters.html',
      controller: 'LettersCtrl'
    });
  }]);