//angular.module('alurapic').controller('FotoController', function($scope, cadastroDeFotos, recursoFoto, $routeParams) {
//A forma adotada abaixo serve para preservar o código em caso de minificação, isso também pode ser aplicado a diretivas e serviços
//Veja que o segundo parâmetro do controller é um array que recebe primeiro todos os artefatos que o controller do Angular receberá e por último a função que define o controller. O processo de minificação jamais tocará nos dados do array e o Angular segue a convenção que o primeiro parâmetro do array será injetado como primeiro parâmetro da função do controller. Se o nome do parâmetro da função do controller muda, tudo continuará funcionando.
angular.module('alurapic').controller('FotoController', ['$scope', 'recursoFoto', '$routeParams', 'cadastroDeFotos', function($scope, recursoFoto, $routeParams, cadastroDeFotos) {

    $scope.foto = {};
    $scope.mensagem = '';

    //console.log();
    if($routeParams.fotoId) {
        recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
            $scope.foto = foto;
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto'
        });
    }

    $scope.submeter = function() {

        if ($scope.formulario.$valid) {

            cadastroDeFotos.cadastrar($scope.foto)
            .then(function(dados){
                $scope.mensagem = dados.mensagem;
                if(dados.inclusao){ $scope.foto = {} };
            })
            .catch(function(){
                $scope.mensagem = dados.mensagem;
            });

        }//end if

    }; //$scope.submeter

}]);//end module alurapic
