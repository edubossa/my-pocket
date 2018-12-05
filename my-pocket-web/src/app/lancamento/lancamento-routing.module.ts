import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewLancamentoComponent } from './new-lancamento/new-lancamento.component';
import { UpdateLancamentoComponent } from './update-lancamento/update-lancamento.component';
import { DeleteLancamentoComponent } from './delete-lancamento/delete-lancamento.component';
import { DetailLancamentoComponent } from './detail-lancamento/detail-lancamento.component';
import { ListLancamentoComponent } from './list-lancamento/list-lancamento.component';


const routes: Routes = [
  { path: '', component: ListLancamentoComponent },
  { path: 'new', component: NewLancamentoComponent },
  { path: 'update/:id', component: UpdateLancamentoComponent },
  { path: 'detail/:id', component: DetailLancamentoComponent },
  { path: 'delete/:id', component: DeleteLancamentoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentoRoutingModule { }
