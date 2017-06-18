import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent {

    //Instancia a classe foto component
    foto: FotoComponent = new FotoComponent();
    //Criando o metodo http como propriedade da classe
    meuForm: FormGroup;
    /*Construtor feito para testar os dados de exibição na view
    constructor(){
        this.foto.titulo = "A";
        this.foto.url = "B";
        this.foto.descricao = "C";
    }*/
    service: FotoService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';

    //Define http no construtor da classe
    constructor(service: FotoService,fb: FormBuilder, route: ActivatedRoute, router: Router){

        this.service = service;
        this.route = route;
        this.router = router;

        this.route.params.subscribe(params => {

            let id = params['id'];

            if (id) {
              this.service
                .buscaPorId(id)
                .subscribe(
                    foto => this.foto = foto,
                    erro => console.log(erro)
                );
            }

        });

        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: ['']
        });

    }

    cadastrar(event){

        event.preventDefault();
        console.log(this.foto);

        // usar servico
        this.service
            .cadastra(this.foto)
            .subscribe( res => {
                this.mensagem = res.obterMensagem();
                this.foto = new FotoComponent();
                if(!res.ehInclusao()){
                  this.router.navigate(['']);
                }
            }, erro => console.log(erro));
    }

}// end - cadastro component
