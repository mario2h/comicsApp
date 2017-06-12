(function() {
  'use strict';

  angular.module('starter.config', [])
    .config(configStates)
    .run(initCoreComponents);

  // configuración de estados
  function configStates($stateProvider, $urlRouterProvider) {

    $stateProvider.state('app', {
      url:'/app',
      abstract: true,
      templateUrl: 'js/home/home.html'
    })

    .state('app.comics', {
      url:'/comics',
      views: {
        'content': {
          'templateUrl': 'js/comics/comics.html',
          'controller': 'ComicsController as ctrl'
        }
      }
    })

    .state('app.details', {
      url:'/details/:idComic',
      views: {
        'content': {
          'templateUrl': 'js/details/comicsDetails.html',
          'controller': 'ComicsDetailsCtrl as ctrl'
        }
      }
    })

    .state('app.about', {
      url:'/about',
      views: {
        'content': {
          'templateUrl': 'js/about/about.html'
        }
      }
    });

    // Si una dirección no está vinculada con ningún estado, que vaya a la dirección /comics
    $urlRouterProvider.otherwise('/app/comics');
  }

  // inicializar configuración de la app
  function initCoreComponents($ionicPlatform) {
      $ionicPlatform.ready(function(){});
      console.info('app init!');
  }
})();
