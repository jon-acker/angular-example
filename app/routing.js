'use strict';

angular.module('testApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/views/main.html',
                controller: 'mainController'
            })
            .when('/list', {
                templateUrl: 'app/views/list.html',
                controller: 'listController'
            })
            .otherwise({
                redirectTo: '/'
            });

    }]);
