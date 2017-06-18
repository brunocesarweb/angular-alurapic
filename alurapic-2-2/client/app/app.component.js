"use strict";
/*
O que é um component? É a unidade de código que encapsula dados, o comportamento e a apresentação, podendo coesistir com outros componentes sem bagunçá-los.
Obs: Em angular um componente nada mais é do que uma classe (ES6)
Para importarmos componentes usaremos o TypeScript por isso temos arquivos criados com a extensão .ts.

O código escrito em TypeScript não será reconhecido pelo browser, por isso o TypeScript instalado funciona como um transcompilador ele converte os códigos de uma linguagem para outra
O arquivo app.component.js.map é gerado e ele ajuda na depuração, quando ouver um problema no arquivo .js ele indicará o problema no .ts.
Comando npm:
O tsc:w, o tsc é o compilador do typescript o parâmetro -w faz com que o typescript monitore todos os nossos arquivos .ts.

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importa o serviço componente do angular na pasta node_modules
var core_1 = require("@angular/core");
//Importação do serviço de requisição
//import{ Http } from '@angular/http';
//Definição dos seletores
var AppComponent = (function () {
    //Classe AppComponent, o export é para indicar que a class AppComponent é exportável
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app',
        templateUrl: './app.component.html'
    })
    //Classe AppComponent, o export é para indicar que a class AppComponent é exportável
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map