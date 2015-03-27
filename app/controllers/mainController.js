'use strict';

angular.module('testApp')

    .controller('mainController', ['$scope', function($scope) {
        $scope.product = { quantity: 10 };
    }]);
