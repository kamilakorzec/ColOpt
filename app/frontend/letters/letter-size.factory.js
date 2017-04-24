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

    var sizes = [99, 79, 62, 50, 39, 31, 25, 20, 16, 12, 10];
    //hardcoded values for letter size for 170cm distance and 250μm pixel size

    function letters() {
      return shuffle(['C', 'D', 'H', 'K', 'N', 'O', 'R', 'S', 'V', 'Z']);
    }

    function initSize() {
      return sizes[0];
    }

    function letterSize(currentSize) {
      return sizes[sizes.indexOf(currentSize)+1];
    }

    return {
      getLetters: letters,
      getLetterSize: letterSize,
      getInitSize: initSize
    }
  }]);