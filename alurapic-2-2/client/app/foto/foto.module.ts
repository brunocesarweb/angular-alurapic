import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';
import { FotoService } from './foto.service';

@NgModule({
    //Em declarations é incluido tudo que faz parte do módulo
    declarations: [ FotoComponent, FiltroPorTitulo ],
    //E export permite o que desse modulo queremos que os outros utilizem
    exports: [ FotoComponent, FiltroPorTitulo ],
    //O foto service é injetado como provider, ao deixar em provider estamos dizendo que o FotoService está disponível para injeção de dependencias
    providers: [ FotoService ]
})

export class FotoModule {  }