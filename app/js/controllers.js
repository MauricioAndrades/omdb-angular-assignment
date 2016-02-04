'use strict';
/* Controllers */
var omdbControllers = angular.module('omdbControllers', ["angular.filter"]);
omdbControllers.controller('MovieController', function($scope, $http) {
    $scope.$watch('search', function() {
        fetch();
    });
    
    $scope.search = "";

    function fetch() {
        $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full&p=10")
            .then(function(response) {
                $scope.details = response.data;
            });
        $http.get("http://www.omdbapi.com/?s=" + $scope.search)
            .then(function(response) {
                // function chunk(arr, size) {
                //   var newArr = [];
                //   for (var i=0; i<arr.length; i+=size) {
                //     newArr.push(arr.slice(i, i+size));
                //   }
                //   return newArr;
                // }
                // $scope.related = chunk(response.data, 3);
                console.log(response);
                $scope.related = response.data;
            });
    }
    $scope.update = function(movie) {
        $scope.search = movie.Title;
    };
    $scope.select = function() {
        this.setSelectionRange(0, this.value.length);
    };
});
