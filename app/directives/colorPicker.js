'use strict';

angular.module('testApp')

.directive('colorPicker', function() {

    return {
        restrict: 'E',
        controller: function ($scope) {
            // expose API to other directives
            $scope.changeColor = function(color) {
                $scope.chosenColor = color;
            }
        },
        link: function (scope, element) {
            // process DOM before inserting new element
            scope.colors = [ 'Green', 'Red', 'Blue' ]
            scope.chosenColor = '';
        },
        templateUrl: 'app/views/color-picker.html'
    }

});
