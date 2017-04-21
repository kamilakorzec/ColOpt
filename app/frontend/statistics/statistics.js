'use strict';

angular.module('thesisApp.statistics', ['ngRoute', 'ui.bootstrap'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/stats', {
            templateUrl: 'statistics/statistics.html',
            controller: 'StatsCtrl'
        });
    }])

    .controller('StatsCtrl', [ '$scope', '$http', '$state', function($scope, $http, $state) {
        function getResults() {
            $http.get('http://localhost:3000/results').then(function (response) {
                $scope.data = response.data;
                var lastResult = response.data[response.data.length - 1];
                sortData();

                var lambdasTable = response.data[1].info.acuity;

                $scope.lambdas = [];
                for (var i=0; i<lambdasTable.length; i++){
                    $scope.lambdas.push(lambdasTable[i][0]);
                }

                var stats=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                getStats();

                var svgLast = d3.select(".last-result").append("svg")
                    .attr("width", 600)
                    .attr("height", 400);

                var boxesLast = svgLast.selectAll(".box").data(generateData1(lastResult.info.acuity));

                boxesLast.enter()
                    .append("rect")
                    .attr("class", "box")
                    .attr("x", function (d, i) { return 10 + 20 * i; })
                    .attr("y", function (d) { return 350-d; })
                    .attr("width", 10)
                    .attr("height", function (d) { return d; })
                    .style("fill", "#1f77b4");

                var svgAll = d3.select(".stats-chart").append("svg")
                    .attr("width", 600)
                    .attr("height", 400);

                var boxesAll = svgAll.selectAll(".box").data(generateData(stats));

                boxesAll.enter()
                    .append("rect")
                    .attr("class", "box")
                    .attr("x", function (d, i) { return 10 + 20 * i; })
                    .attr("y", function (d) { return 350-d; })
                    .attr("width", 10)
                    .attr("height", function (d) { return d; })
                    .style("fill", "gray");

                function getStats() {
                    for(var i=1; i<response.data.length; i++){
                        for(var j=0; j<$scope.lambdas.length; j++)
                            stats[j]+= parseFloat(response.data[i].info.acuity[j][1]);
                    }
                    console.log(stats);
                    for(var t=0; t<stats.length; t++){
                        stats[t] /= (response.data.length-1);
                    }
                }

                function generateData (table) {
                    var n = table.length;
                    return d3.range(n).map(function (i) {
                        return 100 * (table[i]+2)
                    });
                }

                function generateData1 (table) {
                    var n = table.length;
                    return d3.range(n).map(function (i) {
                        return 100 * (table[i][1]+2)
                    });
                }

                function sortData() {
                    for(var i=1; i<response.data.length; i++)
                        response.data[i].info.acuity.sort(function(a,b) {
                            return a[0]-b[0]
                        });
                }
            });
        }

        getResults();

        $scope.toBeginning = function () {
            console.log('hete');
            $state.go('form', {refresh: true});
        }

    }]);