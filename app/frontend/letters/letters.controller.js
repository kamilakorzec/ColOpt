'use strict';

angular.module('colOpt.letters')

.controller('LettersCtrl', ['$scope', '$data', '$state', 'Colors', 'LetterSize', function($scope, $data, $state, Colors, LetterSize) {

  var letters=[], error=0, logMar=0.5;
  var l=0;
  var info = $state.params.info || {};
  info.acuity = [];
  $scope.letterAns = [];

  var colors = Colors;

  $scope.pass = function() {
    info.acuity.push([$scope.color, logMar]);
    $scope.letterHeight = Math.round(letterHeight / Math.pow(1.25892541179, 5) );
    l++;
    logMar = 0.5;
    init();
  };

  $scope.updateData = function(){
    for(var i=0; i<5; i++){
      if((letters[i] === $scope.letterAns[i])||(letters[i] === $scope.letterAns[i].toUpperCase())){
        logMar -= 0.02;
      }
      else
        error++
    }
    if( error > 2 ){
      $scope.pass();
    }
    else {
      $scope.letterHeight = LetterSize.getLetterSize($scope.letterHeight);
      error = 0;
      init();
    }
  };

  $scope.allGood = function() {
    logMar -= 0.1;
    $scope.letterHeight = LetterSize.getLetterSize($scope.letterHeight);
    error = 0;
    init();
  };

  function init() {
    if( l<colors.length ) {
      letters = LetterSize.getLetters();
      error = 0;

      $scope.letterAns = [];

      $scope.letter1 = letters[0];
      $scope.letter2 = letters[1];
      $scope.letter3 = letters[2];
      $scope.letter4 = letters[3];
      $scope.letter5 = letters[4];

      $scope.color = colors[l];
    }
    else
    {
      $data.post(info);
      $state.go('stats');
    }
  }

  init();
}]);