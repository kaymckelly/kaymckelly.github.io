(function() {
  'use strict';

  angular
    .module('booplesnoot')
    .config(config);

    function config($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("oops");

// TODO: must set states for oops page, which is an error page with a meme or something, as well as the remainder of the states for the other pages
      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: "index.html"
        })
        .state('about', {
          url: "/about",
          templateUrl: "/about/about.html",
          controller: 'aboutController',
          controllerAs: 'idkMyBffRose'
        })
    }
})();
