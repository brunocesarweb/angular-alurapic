import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
//Encapsulamento, declarar ViewEncapsulation no import 
//a declaração é: encapsulation: ViewEncapsulation.Emulated
//Os tipos de encapsulamento são:
//-None que não encapsula o css da view
//-Emulated que emula o shadow dom para funcionar nos navegadores
//-Native usa o shadow dom nativo do navegador 
//Se essa propriedade não for definida por padrão será usada o ViewEncapsulation.Emulated
})

export class FotoComponent{ 

    @Input() titulo: string;
    @Input() url: string;
    descricao: string;
    _id: string;

 }