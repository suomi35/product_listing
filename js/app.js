angular.module('ProductListingApp', [
    'ProductListingApp.services',
    'ProductListingApp.controllers',
    'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when("/products", {
        templateUrl: "partials/products.html",
        controller: "productsController"
    }).
    when("/products/:id", {
        templateUrl: "partials/product.html",
        controller: "productController"
    }).
    when("/addnew", {
        templateUrl: "partials/addnew.html",
        controller: "addNewController"
    }).
    otherwise({
        redirectTo: '/products'
    });
}]);