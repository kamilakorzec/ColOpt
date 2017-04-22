'use strict';

angular.module('colOpt.form', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'form/form.html',
            controller: 'FormCtrl'
        });
    }])