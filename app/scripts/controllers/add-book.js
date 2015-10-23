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
		$scope.bookAdded = false;
		$scope.bookAddError = false;

		$scope.addBook = function($event){
			$event.preventDefault();
			
			if(storageService.addBook($scope.book)){
				// Book has been added
				$scope.bookAdded = true;
				$scope.bookAddError = false;

				$scope.book = {};
			}else{
				// Book could not be added
				$scope.bookAdded = false;
				$scope.bookAddError = true;
			}
		};

	});


 angular.module('bookshelfApp')
 	.controller('DatepickerCtrl', function(){

 	});