'use strict';

/**
 * @ngdoc overview
 * @name bookshelfApp
 * @description
 * # bookshelfApp
 *
 * Main module of the application.
 */
angular
  .module('bookshelfApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/add-book', {
        templateUrl: 'views/add-book.html',
        controller: 'addbookCtrl',
        controllerAs: 'add-book'
      })
      .when('/view-book', {
        templateUrl: 'views/view-book.html',
        controller: 'viewbookCtrl',
        controllerAs: 'view-book'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
