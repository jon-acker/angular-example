'use strict';

angular.module('testApp')

.directive('colorPicker', function() {

    return {
        restrict: 'E',
        controller: function ($scope) {
            // expose API to other directives
        },
        link: function (scope, element) {
            // process DOM before inserting new element
            scope.colors = [ 'Green', 'Red', 'Blue' ]
        },
        templateUrl: 'app/views/color-picker.html'
    }

});
