(function() {
  'use strict';

  angular
    .module('booplesnoot')
    .config(config);

    function config($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/home/home.html'
        })
        .when('/about', {
          templateUrl: 'app/about/about.html',
          controller: 'AboutController',
          controllerAs: 'about'
        })
        .otherwise({
          redirectTo: '/home'
        })
    };

    $locationProvider.html5Mode(true);
})();
