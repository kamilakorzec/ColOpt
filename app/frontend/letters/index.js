'use strict';

angular.module('colOpt.letters', ['ngRoute', 'colOpt.data'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/letters', {
      templateUrl: 'letters/letters.html',
      controller: 'LettersCtrl'
    });
  }]);