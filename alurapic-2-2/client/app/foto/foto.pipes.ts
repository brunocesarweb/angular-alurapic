import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent }from './foto.component';

@Pipe({
    name: 'filtroPorTitulo'
})

export class FiltroPorTitulo implements PipeTransform{

    transform(fotos: FotoComponent[], digitando: string){

        digitando = digitando.toLowerCase();
        return fotos.filter( foto => foto.titulo.toLowerCase().includes(digitando) );

    }

}