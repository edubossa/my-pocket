import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html'
})
export class ListaCategoriasComponent implements OnInit {

  categorias$: Observable<Categoria[]>;

  categoriaForm: FormGroup;

  constructor(private categoriaService: CategoriaService,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.resetForm();
    this.loadCategoria();
  }

  resetForm() {
    this.categoriaForm = this.fb.group({
      id: [null],
      name: ['', Validators.required]
    });
  }

  loadCategoria() {
    this.categorias$ = this.categoriaService.getAll();
  }

  /**
   * Listener usado para atualizar a lista atraves da notificacao de eventos devido ao popup ser aberto
   * na mesma tela, a unica forma de renderizar a lista na tela e por EventEmitter, pois o componente
   * ListaCategoriasComponent e instaciado apenas uma vez nesse caso.
   * @param event categoria recebida
   */
  listenerCategoria(event) {
    console.log('Event receive ==> ' + event);
    this.loadCategoria();
  }

  preUpdate(categoria: Categoria) {
    this.categoriaForm.patchValue({
      id: categoria.id,
      name: categoria.name
    });
  }

  preSave() {
    this.resetForm();
  }

  onSubmit() {
    if (this.categoriaForm.value.id != null) {
      this.update();
    } else {
      this.save();
    }
  }

  update() {
    this.categoriaService.put(this.categoriaForm.value, this.categoriaForm.value.id)
      .pipe(
        take(1) // Usado para desinscrever o subscribe
      )
      .subscribe(data => {
        console.log('Response update ==> ' +  JSON.stringify(data));
    }, (error: any) => {
        console.error(JSON.stringify(error));
        alert(error.error.message);
    }, () => { // Complete - chamado apos o subscribe, sejaefetuado com sucesso
        console.log('UPDATE - REQUISICAO FINALIZADA');
        this.loadCategoria();
    });
  }

  save() {
    this.categoriaService.post(this.categoriaForm.value)
      .pipe(
        take(1) // Usado para desinscrever o subscribe
      )
      .subscribe(data => {
        console.log('Response save ==> ' +  JSON.stringify(data));
    }, (error: any) => {
        console.error(JSON.stringify(error));
        alert(error.error.message);
    }, () => { // Complete - chamado apos o subscribe, sejaefetuado com sucesso
        console.log('SAVE - REQUISICAO FINALIZADA');
        this.loadCategoria();
    });
  }

}
