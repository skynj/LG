/**
 * @time 2018/05/18 09:37:30
 * @author lg
 * @desc 趋势预测页js
 */
var app = angular.module('myApp', []);
app.controller('trendPrediction-top-controller', ['$scope', '$http', function ($scope, $http) {
    $http({
        method: 'GET',
        url: '../html/json/trendPrediction.json'
    }).then(function successCallback(response) {
        console.log(response.data);
        $scope.circumstances = response.data.circumstances;
        $scope.fontColor = function (index) {
            return 'font-color-'+ index;
        }
    },function errorCallback(response) {
        console.dir(response);
    })
}]);


