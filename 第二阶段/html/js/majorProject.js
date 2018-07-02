/**
 * @time 2018/05/18 11:07:50
 * @author lg
 * @desc 重点项目页面js
 */
var app = angular.module('myApp', []);
app.controller('majorProject-overview-controller', ['$scope', '$http', function ($scope, $http) {
    $http({
        method: 'GET',
        url: '../html/json/majorProject.json'
    }).then(function successCallback(response) {
        $scope.projectInfo = response.data.ProjectInfo;
        $scope.totalIndicators = response.data.TotalIndicator;
        console.log($scope.totalIndicators);
    },function errorCallback(response) {
        console.dir(response);
    })
}]);
app.controller('majorProject-supervision-controller', ['$scope', '$http', function ($scope, $http) {
    $http({
        method: 'GET',
        url: '../html/json/majorProject.json'
    }).then(function successCallback(response) {
        $scope.reductionProjectInfo = response.data.ReductionProject.reductionProjectInfo;
        console.log($scope.projectInfo);
    },function errorCallback(response) {
        console.dir(response);
    })
}]);