(function () {
'use strict';

	angular
	.module('arsenicWineApp')
	.controller('MainCtrl', ['$scope', 'mainService', MainCtrl]);

	function MainCtrl($scope, mainService) {

	    var vm = $scope;

	    vm.wines = mainService.getWines();

	    vm.clearSearch = function() {
	    	vm.search = "";
	    	console.log('test');
	    }

	}
})();
