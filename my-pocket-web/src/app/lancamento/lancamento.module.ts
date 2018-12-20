import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentoRoutingModule } from './lancamento-routing.module';
import { NewLancamentoComponent } from './new-lancamento/new-lancamento.component';
import { UpdateLancamentoComponent } from './update-lancamento/update-lancamento.component';
import { DetailLancamentoComponent } from './detail-lancamento/detail-lancamento.component';
import { DeleteLancamentoComponent } from './delete-lancamento/delete-lancamento.component';
import { ListLancamentoComponent } from './list-lancamento/list-lancamento.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from '../components/table/table.component';
import { ColumnComponent } from '../components/table/column/column.component';


@NgModule({
  declarations: [
    ListLancamentoComponent,
    NewLancamentoComponent,
    UpdateLancamentoComponent,
    DeleteLancamentoComponent,
    DetailLancamentoComponent,
    TableComponent,
    ColumnComponent
  ],
  imports: [
    CommonModule,
    LancamentoRoutingModule,
    ReactiveFormsModule
  ]
})
export class LancamentoModule { }
