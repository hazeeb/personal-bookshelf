/*global angular */

angular.module('bookshelfApp')
	.factory('storageService', function () {
		'use strict';

		var storageID = 'myBooksStorage';

		var service = {
			books : []
		};

		service.addBook = function(book){
			service.books.push(book);
			localStorage.setItem(storageID, JSON.stringify(service.books));
		};

		service.getBooks = function(){
			service.books = JSON.parse(localStorage.getItem(storageID) || '[]');

			return service.books;
		};
		service.deleteBook = function(bookToDelete){
			var newBooks = [];

			service.books.forEach(function(book){
				if(!(book.name === bookToDelete.name && book.author === bookToDelete.author)){
					newBooks.push(book);
				}
			});
			service.books = newBooks;

			localStorage.setItem(storageID, JSON.stringify(service.books));
		};

	

		return service;
	});