angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
.config(function($routeProvider, $locationProvider) {

  //Configurar url com hash (#)
  //O servidor e o browser precisa estar preparado para trabalhar com esse módulo
  $locationProvider.html5Mode(true);

  //Definindo rotas
  $routeProvider.when('/fotos', {
      templateUrl: 'partials/principal.html',
      controller: 'FotosController'
  });

  $routeProvider.when('/fotos/new', {
      templateUrl: 'partials/foto.html',
      controller: 'FotoController'
  });

  $routeProvider.when('/fotos/edit/:fotoId', {
      templateUrl: 'partials/foto.html',
      controller: 'FotoController'
  });

  //Url inválida
  $routeProvider.otherwise({redirectTo: '/fotos'});

});
