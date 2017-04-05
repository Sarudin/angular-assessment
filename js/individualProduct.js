angular.module('assessment').directive('individualProduct', function() {
  return {
    restrict: 'E',
    templateUrl: './js/product-tmpl.html',
    controller: function($scope, shopService, $stateParams) {
      $scope.product = [];

      $scope.getSingleProduct = shopService.getSingleProduct($stateParams.id).then(function(response) {
        $scope.product = response.data;
      })
    }
  }
})
