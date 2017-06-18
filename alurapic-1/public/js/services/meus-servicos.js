angular.module('meusServicos', ['ngResource'])
//Factory é um recurso que retorna um objeto
//O primeiro parametro é o nome do recurso
//O segundo é uma function com o return de uma instancia de $resource já configurada
.factory('recursoFoto', function($resource){
  //Tres Parametros
  //1-url com id
  //2- null, quando tem que usar a query string
  //3- objeto a chave é o nome da function que pretende-se usar no caso update por se tratar de uma atualização mas pode assumir outro valor
  return $resource('v1/fotos/:fotoId', null, {
    update : {
      method : 'PUT'
    }
  })
})
//Serviço de cadastro de fotos que recebe o serviço recurso foto como parametro
.factory('cadastroDeFotos',function(recursoFoto, $q, $rootScope){

	var servico = {};
	var evento = 'fotoCadastrada';


	servico.cadastrar = function(foto){

		return $q(function(resolve, reject){
			if(foto._id){

				recursoFoto.update({fotoId: foto._id}, foto, function(){
	                $rootScope.$broadcast(evento);
					resolve({
						mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso!',
						inclusao: false
					});
				}, function(erro){
					console.log(erro);
					reject({
						mensagem: 'Não foi possível alterar a foto ' + foto.titulo
					});
				});

			} else {
				
				recursoFoto.save(foto, function(){
	                $rootScope.$broadcast(evento);					
					resolve({
						mensagem: 'Foto ' + foto.titulo + ' incluída com sucesso!',
						inclusao: true
					});
				}, function(erro){
					console.log(erro);
					reject({
						mensagem: 'Não foi possível incluir a foto ' + foto.titulo
					});
				});
			}
		});

	}; //end - servico.cadastrar

	return servico;

});
