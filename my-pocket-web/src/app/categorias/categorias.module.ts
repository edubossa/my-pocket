import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';

@NgModule({
  declarations: [
    ListaCategoriasComponent,
    DeleteCategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoriasModule { }
