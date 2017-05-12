'use strict';

angular.module('colOpt.data')

  .service('$data', ['$http', function($http){
    var serverUrl = 'http://localhost:3000/results';

    function post(info) {
      return $http.post(serverUrl, {info: info});
    }

    function get() {
      return $http.get(serverUrl);
    }

    this.post = post;
    this.get = get;

    return this
  }]);