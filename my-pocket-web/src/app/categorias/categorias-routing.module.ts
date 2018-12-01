import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { NewCategoriaComponent } from './new-categoria/new-categoria.component';
import { UpdateCategoriaComponent } from './update-categoria/update-categoria.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';

const routes: Routes = [
  { path: '', component: ListaCategoriasComponent },
  { path: 'new', component: NewCategoriaComponent },
  { path: 'update', component: UpdateCategoriaComponent },
  { path: 'delete', component: DeleteCategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
