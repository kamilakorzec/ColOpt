'use strict';

angular.module('colOpt.letters')

  .factory('LetterSize', [function () {
    function shuffle(array) { //duplicate with function in Colors factory in same module
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

    function letters() {
      return shuffle(['C', 'D', 'H', 'K', 'N', 'O', 'R', 'S', 'V', 'Z']);
    }

    function letterSize(currentSize) {
      return currentSize/1.25892541179;
    }

    return {
      getLetters: letters,
      getLetterSize: letterSize
    }
  }]);