angular.module('assessment').controller('shopCtrl', function($scope, shopService) {
  $scope.products = [];

  $scope.getProducts = shopService.getProducts().then(function(response) {
    $scope.products = response.data;
  })
})
