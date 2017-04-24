'use strict';

angular.module('colOpt.letters')

.factory('Colors', [function () {

  function shuffle(array) { //duplicate with function in LetterSize service in same module
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  var red = '#ff0000';
  var green = '#007d00';
  var teal = '#003459';
  var blue = '#0000b7';
  var purple = '#750059';

  return shuffle([red, green, teal, blue, purple]);
}]);