
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'lancamento' },
    {
        path: 'lancamento',
        loadChildren: './lancamento/lancamento.module#LancamentoModule'
    },
    {
        path: 'categorias',
        loadChildren: './categorias/categorias.module#CategoriasModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class AppRoutingModule { }
