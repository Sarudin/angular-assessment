angular.module('assessment').controller('productDetailsCtrl', function($scope, shopService, $stateParams) {
  $scope.product = [];

  $scope.getSingleProduct = shopService.getSingleProduct($stateParams.id).then(function(response) {
    $scope.product = response.data;
  })
})
