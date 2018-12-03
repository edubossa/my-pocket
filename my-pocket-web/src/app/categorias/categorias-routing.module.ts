import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';

const routes: Routes = [
  { path: '', component: ListaCategoriasComponent },
  { path: 'delete', component: DeleteCategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
