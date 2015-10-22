'use strict';

/**
 * @ngdoc function
 * @name bookshelfApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookshelfApp
 */
angular.module('bookshelfApp')
  .controller('AddBookCtrl', function ($scope, storageService) {
	
		$scope.book = {};

		$scope.addBook = function($event){
			$event.preventDefault();
			
			storageService.addBook($scope.book);
		};


	});
