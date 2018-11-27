import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCadastroComponent } from './lista-cadastro/lista-cadastro.component';

const routes: Routes = [
  { path: '', component: ListaCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
