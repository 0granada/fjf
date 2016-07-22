'use strict';

angular.module('MainApp', []);

angular.module('MainApp').controller('MainController', ['$scope', function($scope){
  let vm = this;
  vm.quantity = 0;
  vm.total = 0;

  vm.addElement = function(){
    vm.quantity++;
  };

}]);

