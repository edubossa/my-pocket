import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { Categoria } from 'src/app/categorias/categoria';
import { take } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LancamentoService } from '../lancamento.service';
import { Router } from '@angular/router';
import { LancamentoType } from '../lancamento-type';

@Component({
  selector: 'app-new-lancamento',
  templateUrl: './new-lancamento.component.html'
})
export class NewLancamentoComponent implements OnInit {

  categorias: Categoria[];
  lancamentoForm: FormGroup;
  tipoLancamentos: Array<LancamentoType> = [
    new LancamentoType('INPUT', 'Entrada'),
    new LancamentoType('OUTPUT', 'Saída')
  ];

  tipoLancamento: LancamentoType;

  constructor(private categoriaService: CategoriaService,
    private service: LancamentoService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.lancamentoForm = this.fb.group({
      description: ['', Validators.required],
      category: this.fb.group({
        id: ['', Validators.required]
      }),
      type: ['', Validators.required],
      value: ['', Validators.required]
    });

    this.categoriaService.getAll().pipe(take(1))
      .subscribe(data => {
        this.categorias  = data;
      }, (error: any) => {
        alert(JSON.stringify(error));
      });
  }

  onSubmit() {
    this.service.post(this.lancamentoForm.value).pipe(take(1))
    .subscribe(data => {
      console.log('Dados inseridos com sucesso ==> ' + JSON.stringify(data));
    }, (error: any) => {
      alert(JSON.stringify(error));
    }, () => {
      this.router.navigate(['/lancamentos']);
    });

  }


}
