'use strict';

angular.module('myApp.view4', ['ngRoute','customFilterModule'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view4', {
            templateUrl: 'view4/view4.html',
            controller: 'View4Ctrl'
        });
    }])

    .controller('View4Ctrl', [function($scope) {
        $scope.example1 = [
            {name: 'C#', type : 'static'},
            {name: 'PHP', type : 'dynamic'},
            {name: 'Go', type : 'static'},
            {name: 'JavaScript', type: 'dynamic'},
            {name: 'Rust', type: 'static'}
        ]
    }]);
   angular.module('customFilterModule', []).filter('staticLanguage', function(){
       return function(input){
        var out = [];
        angular.forEach(input, function(language){
            if(language.type === 'static'){
                out.push(language)
            }
        })
        return out;
    }
    });



