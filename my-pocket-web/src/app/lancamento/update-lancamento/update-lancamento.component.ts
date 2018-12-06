import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { Categoria } from 'src/app/categorias/categoria';
import { take } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { LancamentoService } from '../lancamento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Lancamento } from '../lancamento';

@Component({
  selector: 'app-update-lancamento',
  templateUrl: './update-lancamento.component.html'
})
export class UpdateLancamentoComponent implements OnInit {

  categorias: Categoria[];

  lancamentoForm = this.fb.group({
    id: [null],
    description: ['', Validators.required],
    category: this.fb.group({
      id: ['', Validators.required]
    }),
    type: ['', Validators.required],
    value: ['', Validators.required]
  });

  tipoLancamentos: Array<string> = ['', 'OUTPUT', 'INPUT'];

  lancamento: Lancamento;

  constructor(private categoriaService: CategoriaService,
    private service: LancamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  /*
  OBS: REMOVER A LISTA DE SUBSCRIBE
  */
  ngOnInit() {
    this.categoriaService.getAll()
      .subscribe(data => {
        this.categorias  = data;

        this.route.paramMap.subscribe(params => {
          this.getLancamento(params.get('id'));
        });

      }, (error: any) => {
        alert(JSON.stringify(error));
      });

  }

  private getLancamento(id: any) {
    this.service.getById(id)
        .subscribe(data => {
          console.log('Response ==> ' +  JSON.stringify(data));
          this.lancamento = data;

          this.lancamentoForm.patchValue({
            id: this.lancamento.id,
            description: this.lancamento.description,
            category: this.lancamento.category,
            type: this.lancamento.type,
            value: this.lancamento.value
          });

        }, error => alert('Nao foi possivel buscar o lancamento pelo id!'));
  }

  onSubmit() {
    this.service.put(this.lancamentoForm.value, this.lancamentoForm.value.id)
      .subscribe(data => {
        console.log('Dados atualizados com sucesso ==> ' + JSON.stringify(data));
      }, (error: any) => {
        alert(JSON.stringify(error));
      }, () => {
        this.router.navigate(['/lancamentos']);
      });
  }

}
