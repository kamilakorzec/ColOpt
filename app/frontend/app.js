'use strict';

// Declare app level module which depends on views, and components
if(!window.app) {
  window.app = angular.module('colOpt', [
    'ngRoute',
    'ui.bootstrap',
    'colOpt.form',
    'colOpt.letters',
    'colOpt.statistics',
    'ui.router'
  ]).config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
  }]).config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('letters', {
          url:'/letters',
          templateUrl: 'letters/letters.html',
          controller: 'LettersCtrl',
          params: {
              info: {}
          }
          }
        )
        .state('form', {
          url:'/',
          templateUrl: 'form/form.html',
          controller: 'FormCtrl'
          }
        )
        .state('stats', {
          url:'/stats',
          templateUrl: 'statistics/statistics.html',
          controller: 'StatsCtrl'
          }
        )
  }]);
}
