(function() {
  'use strict';

  angular
    .module('starter.services', [])
    .factory('ComicsServices', ComicsServices)
    .factory('GetterAndSetter', GetterAndSetter);

    //--------- [injeccion de dependencias] ---------//
    ComicsServices.$inject = ['$http', '$log', '$q'];

    //--------- [controller] -----------//
    function ComicsServices($http, $log, $q) {
      var vm = this;

      var service = {
        getComics: getComics,
      };

      return service;

      // consulta API para obtener comics.
      function getComics() {
        var publicKey = 'ca30d846c7e001e9271cdcdde3b27b19';
        var privateKey = ''; // aquí key privada entregada por la API
        var timestamp = Date.now();
        var params = timestamp + privateKey + publicKey;
        var hash = md5(params);

        var apiUrl = 'https://gateway.marvel.com/v1/public/comics?limit=50&ts='+timestamp+'&apikey='+publicKey+'&hash='+hash;

        var d = $q.defer();

        $http
            .get(apiUrl)
            .then(displayComics)
            .catch(displayError)

        function displayComics (response) {
          console.info(response);
          d.resolve(response.data.data.results);
        }

        function displayError (error) {
          var error = error.data;
          $log.error('Error API:', error);
          d.reject();
        }
        return d.promise;
      }
    }

    function GetterAndSetter(){

    	var comicsData = '';
    	var regData = '';

    	var service = {
    		getComics: getComics,
    		setComics: setComics,
    	};

    	return service;

    	function getComics(){
    		return comicsData;
    	}

    	function setComics(data){
    		comicsData = data;
    	}

    }
})();
