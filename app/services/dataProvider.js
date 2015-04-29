'use strict';

angular.module('testApp').factory('dataProvider', function() {
    var products = [
        {
            name: 'DVD Player',
            id: 1,
            price: 10
        },
        {
            name: 'CD Player',
            id: 2,
            price: 12
        }
    ];

    return {
        getProducts: function() {
            return products;
        }
    }
});
