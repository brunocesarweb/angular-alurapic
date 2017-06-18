angular.module('minhasDiretivas', [])
.directive('meuPainel',function(){
  //Toda diretiva do angular deve retornar um objeto ddo(directive definition object) que é a diretiva configurada
  var ddo = {};

  //Apos delcarado é preciso declarar qual a restrição de uso. Aqui o ddo é definido como AE para ser usado como Atributo e Elemento
  ddo.restric = "AE";

  //Criação do scope privado, esse scope privado pertence a diretiva, nada tem a ver com o $scope
  //Isso evita que interfira no restante do código
  ddo.scope = {
    //Captura o valor definido na diretiva(@titulo captura), e passa como valor para o scope
    //A expressao @titulo captura o valor da angular expression como string
    titulo: "@titulo"
  };

  //Ativando o transclude para que a diretiva mantenha os elementos filhos na hora do angualar processar o html, e referenciar no html qual a tag que manterá os filhos
  ddo.transclude = true;

  //Separa a template para um arquivo html
  ddo.templateUrl = 'js/directives/meu-painel.html';

  return ddo;

})
.directive('minhaFoto', function() {

  var ddo = {};

  ddo.restric = "AE";

  ddo.scope = {
      titulo: '@',
      url: '@'
  };

  ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

  return ddo;
})
.directive('meuBotaoPerigo', function(){

  var ddo = {};
  ddo.restrict = "E";

  ddo.scope = {
    //@ é uma cópia de um valor e será sempre uma string
    nome: '@',
    //O atributo & é usado para ser passado como uma expressão para a diretiva e essa exressão será avaliada no escopo do controller
    acao: '&'
  };

  ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

  return ddo;

})
.directive('meuFocus', function(){

  var ddo = {};

  ddo.restric = "A";

  /*Por estar usando o scope.on não é necessário usar o ddo.scope focado
  ddo.scope = {
    focado : '='
  };*/

  ddo.link = function(scope, element){

    scope.$on('fotoCadastrada', function(){
      element[0].focus();
    });
    /*Abriu mão do watch para usar o on
    scope.$watch('focado', function(){
      if(scope.focado) {
        element[0].focus();
        scope.focado = false;
      }
    });*/
  }

  return ddo;
})
.directive('meusTitulos', function() {

    var ddo = {};
    ddo.restrict = 'E';
    ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';

    ddo.controller = function($scope, recursoFoto) {

        recursoFoto.query(function(fotos) {

            $scope.titulos = fotos.map(function(foto) {

                return foto.titulo;

            });    

        });

    };

    return ddo;

});
