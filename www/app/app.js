
angular.module('eliteApp', ['ionic'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .config( function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('home', {
        abstract: true,
        url: "/home",
        templateUrl:"app/home/home.html"
      })
      .state('home.leagues', {
        url:'/leagues',
        view: {
          'tab-leagues': {
            templateUrl: "app/home/leagues.html"
          }
        }
      })
      .state('home.myteams', {
        url: "/myteams",
        view: {
          "tab-myteams": {
            templateUrl: "app/home/myteams.html"
          }
        }
      })
      .state('app', {
        url: '/app',
        templateUrl: "app/layout/menu-layout.html"

    });
    $urlRouterProvider.otherwise('/home/leagues');
  });
