(function() {
  'use strict';

  angular
    .module('starter.comicsDetails', [])
    .controller('ComicsDetailsCtrl', ComicsDetailsCtrl);

    // injeccion de dependencias
    ComicsDetailsCtrl.$inject = ['$stateParams', 'GetterAndSetter'];

    // controller
    function ComicsDetailsCtrl(parametros, getAndSet) {
      var vm = this;

      //variables
      vm.comicSelect = {};
      vm.idComic = parseInt(parametros.idComic);
      vm.listComics = getAndSet.getComics();

      comicSeleccionado();

      function comicSeleccionado() {
        angular.forEach(vm.listComics, function(comic) {
          if (comic.id === vm.idComic) {
            vm.comicSelect = comic;
          }
        });
      }
    }
})();
