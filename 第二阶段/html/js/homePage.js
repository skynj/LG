/**
 * @time 2018/05/17 10:57:52
 * @author lg
 * @desc    首页js
 */

function HomePage() {
    this.init();
}

HomePage.prototype = {
    init: function () {
        var _this = this;
        _this.scrollbar();
    },
    scrollbar: function () {
        var _this = this;
        $(".notification .list-content").perfectScrollbar();
        $(".policies-regulations .list-content").perfectScrollbar();
        $(".backlog .list-content").perfectScrollbar();
    }

};


var app = angular.module('myApp', []);
app.controller('homePage-leftList-controller', ['$scope', '$http', function ($scope, $http) {
    $http({
        method: 'GET',
        url: '../html/json/homePage.json'
    }).then(function successCallback(response) {
        // console.log(response.data);
        $scope.informs = response.data.Informs;
        $scope.regulations = response.data.Regulations;
        $scope.backlogs = response.data.Backlogs;
        $scope.overviewInfos = response.data.OverviewInfos;
        $scope.compared = function (currentValue) {
            if( currentValue <= 90 ){
                $scope.state = "down";
                return (90 - currentValue).toFixed(2) + "%";
            }else if( currentValue >= 90 ){
                $scope.state = "up";
                return (currentValue - 90).toFixed(2) + "%";
            }
        }
        // console.log(response.data.OverviewInfos);
    },function errorCallback(response) {
        console.dir(response);
    })
}]);

new HomePage();

