'use strict';

/**
 * @ngdoc function
 * @name bookshelfApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookshelfApp
 */
angular.module('bookshelfApp')
  .controller('BooksCtrl', function ($scope, storageService) {
		$scope.books = storageService.getBooks();

		$scope.deleteBook = function(book){
			storageService.deleteBook(book);
			$scope.books = storageService.getBooks();
		};

	});


