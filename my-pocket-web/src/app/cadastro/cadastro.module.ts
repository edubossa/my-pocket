import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { ListaCadastroComponent } from './lista-cadastro/lista-cadastro.component';
import { NewCadastroComponent } from './new-cadastro/new-cadastro.component';
import { UpdateCadastroComponent } from './update-cadastro/update-cadastro.component';
import { DeleteCadastroComponent } from './delete-cadastro/delete-cadastro.component';
import { DetailCadastroComponent } from './detail-cadastro/detail-cadastro.component';

@NgModule({
  declarations: [ListaCadastroComponent, NewCadastroComponent, UpdateCadastroComponent, DeleteCadastroComponent, DetailCadastroComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
