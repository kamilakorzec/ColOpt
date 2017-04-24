'use strict';

angular.module('colOpt.data')

  .service('$data', ['$http', function($http){
    var serverUrl = 'http://localhost:3000/results';

    function post(info) {
      $http.post(serverUrl, {info: info});
    }

    this.post = post;

    return this
  }]);