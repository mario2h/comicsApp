(function() {
  'use strict';

  angular
    .module('starter.comics', [])
    .controller('ComicsController', ComicsController);

    //------- [injeccion de dependencias] --------//
    ComicsController.$inject = ['ComicsServices', 'GetterAndSetter', '$scope'];

    //------- [controller] -------------//
    function ComicsController(service, getAndSet, $scope) {
      var vm = this;

      //variables
      vm.listComics = [];
      vm.buscar = false;

      activate();

      function activate () {
        service.getComics()
                .then(function (data) {
                  vm.data = data;
                  vm.listComics = procesarDatos();
                  getAndSet.setComics(vm.listComics);
                });
      }

      function procesarDatos() {
        angular.forEach(vm.data, function(comic) {
          comic.description = comic.description !== null ? comic.description : "Descripcion no disponible.";
        })
        return vm.data;
      }
    }
})();
