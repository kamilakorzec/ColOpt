'use strict';

angular.module('colOpt.statistics', ['ngRoute', 'ui.bootstrap', 'colOpt.data'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/stats', {
            templateUrl: 'statistics/statistics.html',
            controller: 'StatsCtrl'
        });
    }]);