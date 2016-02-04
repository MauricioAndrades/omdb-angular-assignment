'use strict';
/* Filters */
angular.module('phonecatApp', []).filter('chunk', function(arr, size) {
      var newArr = [];
      for (var i=0; i<arr.length; i+=size) {
        newArr.push(arr.slice(i, i+size));
      }
      return newArr;
    $scope.chunkedData = chunk(myData, 3);
});
