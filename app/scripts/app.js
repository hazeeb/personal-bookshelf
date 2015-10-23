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
    'ui.bootstrap',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/books', {
        templateUrl: 'views/books.html',
        controller: 'BooksCtrl'
      })
      .when('/books/add', {
        templateUrl: 'views/add-book.html',
        controller: 'AddBookCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
