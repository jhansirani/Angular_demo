'use strict';

var app=angular.module('myApp.hello', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/hello', {
            templateUrl: 'view3/hello.html',
            controller: 'View3HelloCtrl'
        });
    }]);
    /*.controller('View3HelloCtrl', [function() {

    }]);*/