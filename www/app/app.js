
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
        url: "/home",
        templateUrl:"app/home/home.html"
      });
    $urlRouterProvider.otherwise('/home');
  });
