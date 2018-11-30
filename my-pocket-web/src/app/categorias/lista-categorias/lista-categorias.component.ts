import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {

  categorias$: Observable<Categoria[]>;

  categoriaForm: FormGroup;

  constructor(private categoriaService: CategoriaService, private fb: FormBuilder) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {
    this.categoriaForm = this.fb.group({
      name: ['', Validators.required]
    });
    this.loadCategoria();
  }

  loadCategoria() {
    this.categorias$ = this.categoriaService.findCategorias();
  }

  onSubmit() {
    console.log('SEND ==> ' + JSON.stringify(this.categoriaForm.value));
    this.categoriaService.save(this.categoriaForm)
      .pipe(
        take(1) // Usado para desinscrever o subscribe
      )
      .subscribe(data => {
        console.log('Retorno cadastro de dados ' +  JSON.stringify(data));
    }, (error: any) => {
        console.error(JSON.stringify(error));
        alert(error.error.message);
    }, () => { // Complete - chamado apos o subscribe, sejaefetuado com sucesso
        console.log('REQUISICAO FINALIZADA');
        this.resetForm();
    });

  }

  delete(id: number) {

    const res = confirm('Confirma a remoção da categoria - ' + id);
    if (!res) {
      return;
    }

    this.categoriaService.delete(id).pipe(
      take(1)
    )
    .subscribe(data => {
      console.log(data);
    }, (error: any) => {
      alert(JSON.stringify(error));
    }, () => {
      console.log('FINALIZANDO DELETE CATEGORIA - ' +  id);
      this.resetForm();
    });

  }

}
