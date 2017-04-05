angular.module('assessment', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html',
      controller: 'shopCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: './views/about.html',
      controller: 'shopCtrl'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: './views/blog.html',
      controller: 'shopCtrl'
    })
    .state('details', {
      url: '/details/:id',
      templateUrl: './views/product-tmpl.html',
      controller: 'productDetailsCtrl'
    })
    .state('products', {
      url: '/products',
      templateUrl: './views/product-tmpl.html',
      controller: 'shopCtrl'
    })
    .state('shop', {
      url: '/shop',
      templateUrl: './views/shop.html',
      controller: 'shopCtrl'
    })

  $urlRouterProvider.otherwise('/');
});
