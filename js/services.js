angular.module('ProductListingApp.services', [])
    .factory('myAPIservice', function($http) {

        var myAPI = {};

        myAPI.getAllProducts = function() {
            return $http({
                method: 'JSONP',
                url: 'http://suomi35.org:3000/api/products?access_token=supersecret'
            });
        }

        myAPI.getProductDetails = function(id) {
            return $http({
                method: 'JSONP',
                url: 'http://suomi35.org:3000/api/products/' + id + '?access_token=supersecret'
            });
        }

        return myAPI;
    });