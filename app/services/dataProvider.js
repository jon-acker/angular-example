'use strict';

angular.module('testApp').factory('dataProvider', function() {
    var products = [
        {
            name: 'CD Player',
            id: 2
        }
    ];

    return {
        getProduct: function() {
            return products[0];
        }
    }
});
