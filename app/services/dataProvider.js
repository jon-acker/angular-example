'use strict';

angular.module('testApp').factory('dataProvider', function() {
    var products = [
        {
            name: 'DVD Player',
            id: 1
        },
        {
            name: 'CD Player',
            id: 2
        }
    ];

    return {
        getProducts: function() {
            return products;
        }
    }
});
