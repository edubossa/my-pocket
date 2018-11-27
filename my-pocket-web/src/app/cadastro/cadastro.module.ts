import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { ListaCadastroComponent } from './lista-cadastro/lista-cadastro.component';

@NgModule({
  declarations: [ListaCadastroComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
