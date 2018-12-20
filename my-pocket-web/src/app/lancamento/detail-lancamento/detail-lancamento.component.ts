import { Component, OnInit, OnDestroy } from '@angular/core';
import { LancamentoService } from '../lancamento.service';
import { ActivatedRoute } from '@angular/router';
import { Lancamento } from '../lancamento';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-lancamento',
  templateUrl: './detail-lancamento.component.html'
})
export class DetailLancamentoComponent implements OnInit, OnDestroy {

  sub: Subscription;
  lancamento: Lancamento;

  constructor(private service: LancamentoService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.service.getById(params.get('id'))
      .subscribe(data => {
        this.lancamento = data;
      }, error => alert('Nao foi possivel carregar o lancamento'));
    });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
