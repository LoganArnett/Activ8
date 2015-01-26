// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('activ8', ['ionic', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at 
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})
.constant('CONFIG', {
  Firebase: {
    baseUrl: 'https://activ8.firebaseio.com'
  }
})
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('login', {
      url: '/login',
      templateUrl: 'states/login.html'
    })
    
    .state('main', {
      url: '/main',
      templateUrl: 'states/main.html'
    })
    
    .state('new-work', {
      url: '/new-work',
      templateUrl: 'states/new-work.html',
    })
    
    .state('history', {
      url: '/history',
      templateUrl: 'states/history.html'
    })
    
    .state('pr', {
      url: '/pr',
      templateUrl: 'states/pr.html'
    })
    
    .state('tabs', {
      templateUrl: 'states/tabs.html'
    })
  
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/main');
  

});
