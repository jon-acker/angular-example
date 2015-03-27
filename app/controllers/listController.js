'use strict';

angular.module('testApp')

.controller('listController', ['$scope', 'dataProvider', function($scope, dataProvider) {
    $scope.products = dataProvider.getProducts();
}]);
