import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCadastroComponent } from './lista-cadastro/lista-cadastro.component';
import { NewCadastroComponent } from './new-cadastro/new-cadastro.component';
import { UpdateCadastroComponent } from './update-cadastro/update-cadastro.component';
import { DeleteCadastroComponent } from './delete-cadastro/delete-cadastro.component';
import { DetailCadastroComponent } from './detail-cadastro/detail-cadastro.component';

const routes: Routes = [
  { path: '', component: ListaCadastroComponent },
  { path: 'new', component: NewCadastroComponent },
  { path: 'update/:id', component: UpdateCadastroComponent },
  { path: 'detail/:id', component: DetailCadastroComponent },
  { path: 'delete/:id', component: DeleteCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
