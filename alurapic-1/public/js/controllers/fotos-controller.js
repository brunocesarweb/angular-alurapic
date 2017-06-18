//O angular trabalha com injeção de dependencias e são injetados os valores $scope e $http(este serve para requisições ajax)
angular.module('alurapic').controller('FotosController',function($scope, recursoFoto) {

  $scope.fotos = [];
  $scope.filtro = '';
  $scope.mensagem = '';

  //usando o comando query obtem todas as fotos do servidor, passa duas functions uma com status sucesso e outra com erro
  recursoFoto.query(function(fotos){
    $scope.fotos = fotos;
  }, function(erro){
    console.log(erro);
  });

  //Função remove foto recebe foto como parametro
  $scope.remover = function(foto){
    //console.log(foto.titulo);

    //Recurso delete passa como parametro o id da foto e as functions sucesso e erro
    recursoFoto.delete({fotoId : foto._id},function(){
      var indiceFoto = $scope.fotos.indexOf(foto);
      $scope.fotos.splice(indiceFoto, 1);
      $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso!';
      //Veja que ao limparmos o formulário, automaticamente nossa validação é disparada. Contudo, se você quiser que isso não acontece, logo depois de limpar o formulário faça:
      //$scope.formulario.$setPristine();

    }, function(erro){
      console.log(erro);
      $scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo;
    });

  };
/* Outra maneira de desenvolver o código
  $http.get('v1/fotos');
  promise.then(function(retorno){
    $scope.fotos = retorno.data;
  }).catch(function(error){
    console.log(error);
  });*/

});
