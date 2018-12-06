import { Component, OnInit } from '@angular/core';
import { LancamentoService } from '../lancamento.service';
import { take } from 'rxjs/operators';
import { Lancamento } from '../lancamento';

@Component({
  selector: 'app-list-lancamento',
  templateUrl: './list-lancamento.component.html'
})
export class ListLancamentoComponent implements OnInit {

  cadastros: Lancamento[];

  constructor(private service: LancamentoService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getAll()
      .pipe(
        take(1)
      )
      .subscribe(data => {
        this.cadastros = data;
        // console.log('Response ==> ' + JSON.stringify(this.cadastros));
      }, (error: any) => {
        console.error(JSON.stringify(error));
      }, () => {
        console.log('COMPLETE LOAD LANCAMENTOS !');
      });
  }

}
