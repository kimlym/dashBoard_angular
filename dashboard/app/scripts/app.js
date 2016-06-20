'use strict';
/**
 * @ngdoc app
 * @name dashboard
 * @description
 * # dashboard
 *
 * Main module of the application. Define the routing architecture for the app
 */
var app = angular.module('myApp',['ui.router','ui.bootstrap','ngMaterial','ngResource','ngAnimate']);
app.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/login');
  $stateProvider
    .state('login',{
      url: '/login',
      views:{
        '': {
          templateUrl: 'templates/login.html',
        }
      }
    })
    .state('login.authorize',{
      redirectTo: 'root.work'
    })
    .state('root',{
      url: '/root',
      views:{
        '':{
          templateUrl: "templates/root.html",
          controller: 'rootCtrl'
        }
      }
    })
    .state('root.work',{
      url: '/work',
      views:{
        '':{
          templateUrl: "templates/work.html",
          resolve: {
            data: function(fetchWork){
              return fetchWork.getWork();
            }
          },
          controller: 'workCtrl'
        }
      }
    })
    .state('root.overview',{
      url: '/overview',
      templateUrl: "templates/overview.html",
      resolve: {
        profile: function(getProfile){
          return getProfile.get().success(function(res){
            return res.profiles;
          });
        }
      },
      controller: function(profile,getData){
        getData.setProData(profile.data.profiles);
      }
    })
    .state('root.contact',{
      url: '/contact',
      templateUrl: "templates/contact.html",
      resolve:{
        location: function(getContact){
          return getContact.getLocation();
        },
        category: function(getContact){
          return getContact.getCategory();
        }
      },
      controller: function(location,category,getData){
        getData.setLocation(location);
        getData.setCategory(category);
      }
    });

});

app.run(function ($rootScope,$state,login) {
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    // var redirect = toState.redirectTo;
    // if (redirect) {
    //   event.preventDefault();
    //   if(angular.isFunction(redirect))
    //       redirect.call($state);
    //   else
    //       $state.go(redirect);
    // }

    if (!login.islogged() && toState.name !=='login')  {
      event.preventDefault();
      $state.go('login');
    }
  });

});






// ng-router
// app.config(['$routeProvider',function($routeProvider){
//   $routeProvider.
//     when('/Login',{
//       templateUrl: 'templates/login.html',
//       controller: 'LoginController'
//     }).
//     when('/Work',{
//       templateUrl: 'templates/work.html',
//       controller: 'WorkController',
//     }).
//     when('/',{
//       templateUrl: 'templates/404.html'
//     })
//     .otherwise({redirectTo: '/'});
// }]);
