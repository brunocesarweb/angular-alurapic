//Criar módulo do angular
import{ NgModule } from '@angular/core';
import{ BrowserModule } from '@angular/platform-browser';
import{ AppComponent } from './app.component';
import{ FotoModule } from './foto/foto.module';
import { HttpModule } from "@angular/http";
import 'rxjs/add/operator/map';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotaoModule } from './botao/botao.module';
import { ModalModule } from './modal/modal.module';
//NgModule transforma a class em módulo do angular
@NgModule({
    //O modulo do angular vai rodar no navegador por isso é importado o módulo browser
    imports: [
        BrowserModule,
        FotoModule,
        HttpModule,
        PainelModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        BotaoModule,
        ModalModule
    ],
    //O que o módulo declara
    declarations: [
        AppComponent,
        CadastroComponent,
        ListagemComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
