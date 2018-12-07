import { Component, OnInit } from '@angular/core';
import { LancamentoService } from '../lancamento.service';
import { ActivatedRoute } from '@angular/router';
import { Lancamento } from '../lancamento';

@Component({
  selector: 'app-detail-lancamento',
  templateUrl: './detail-lancamento.component.html'
})
export class DetailLancamentoComponent implements OnInit {

  lancamento: Lancamento;

  constructor(private service: LancamentoService,
    private route: ActivatedRoute) { }

   /*
  OBS: REMOVER A LISTA DE SUBSCRIBE
  */
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.service.getById(params.get('id'))
      .subscribe(data => {
        this.lancamento = data;
      }, error => alert('Nao foi possivel carregar o lancamento'));
    });

  }

}
