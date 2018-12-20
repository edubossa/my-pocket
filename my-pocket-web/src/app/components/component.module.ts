import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { LancamentoModule } from '../lancamento/lancamento.module';
import { ColumnComponent } from './table/column/column.component';


@NgModule({
    imports: [LancamentoModule],
    exports: [],
    declarations: [
        TableComponent,
        ColumnComponent
    ],
    providers: [],
})
export class ComponentModule { }
