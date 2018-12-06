import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-delete-lancamento',
  templateUrl: './delete-lancamento.component.html'
})
export class DeleteLancamentoComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: LancamentoService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!confirm('Confirma a remoção da categoria - ' + id)) {
      this.router.navigate(['/lancamentos']);
      return;
    }
    this.service.delete(id).subscribe(data => {
      console.log(data);
    }, (error: any) => {
      console.log(JSON.stringify(error));
    }, () => {
      this.router.navigate(['/lancamentos']);
    });

  }

}
