angular.module('ProductListingApp.controllers', []).

/* Products controller */
controller('productsController', function($scope, myAPIservice) {
    $scope.productsList = [];

    /*
        myAPIservice.getProducts().success(function (response) {
            $scope.productsList = response.ProdData.products;
        });
    */

    $scope.productsList.push({
        id: 1,
        name: 'Les Paul guitar',
        desc: 'A great guitar',
        price: '$2300'
    });
    $scope.productsList.push({
        id: 2,
        name: 'Surf Board',
        desc: 'A useful device for surfing',
        price: '$1500'
    });

}).

/* Product controller */
controller('productController', function($scope, $routeParams, myAPIservice) {
    $scope.id = $routeParams.id;
    $scope.product = null;

    /*
        myAPIservice.getProductDetails($scope.id).success(function (response) {
            $scope.product = response;
        });
    */

    switch ($scope.id) {
        case '1':
            $scope.name = 'Les Paul Guitar';
            $scope.desc = 'A great guitar';
            $scope.price = '$2300';
            break;
        case '2':
            $scope.name = 'Surf Board';
            $scope.desc = 'A useful device for surfing';
            $scope.price = '$1500';
            break;
    }
}).

/* Add product controller */
controller('addNewController', function addNewController($scope) {
    $scope.productName = null;
    $scope.productDesc = null;
    $scope.ProductPrice = null;
    $scope.submit = function() {
        if ($scope.txtProdName != '' && $scope.txtProdDesc != '' && $scope.txtProdPrice != '') {
            $scope.productName.push($scope.txtProdName);
            $scope.productDesc.push($scope.txtProdDesc);
            $scope.productPrice.push($scope.txtProdPrice);

        }
    }
}).

/* Comments controller */
controller('commentsController', function commentsController($scope) {
    $scope.comment = [];
    $scope.btn_add = function() {
        if ($scope.txtcomment != '') {
            $scope.comment.push($scope.txtcomment);
            $scope.txtcomment = "";
        }
    }
});