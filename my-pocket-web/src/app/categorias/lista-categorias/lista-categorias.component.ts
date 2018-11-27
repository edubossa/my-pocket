import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    this.loadCategoria();
  }

  resetForm() {
    this.categoriaForm = this.fb.group({
      name: ['', Validators.required]
    })
  }

  loadCategoria() {
    this.categorias$ = this.categoriaService.findCategorias();
  }

  onSubmit() {
    this.categoriaService.save(this.categoriaForm)
      .subscribe(data => {
        console.log('Retorno cadastro de dados ' +  JSON.stringify(data));
    });
    console.warn(this.categoriaForm.value);
    this.resetForm();
    this.loadCategoria();
  }

}
