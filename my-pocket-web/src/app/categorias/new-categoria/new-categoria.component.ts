import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { take } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-new-categoria',
  templateUrl: './new-categoria.component.html'
})
export class NewCategoriaComponent implements OnInit {

  categoriaForm: FormGroup;

  @Output() newCategoriaEvent = new EventEmitter();

  constructor(private categoriaService: CategoriaService,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {
    this.categoriaForm = this.fb.group({
      name: ['', Validators.required]
    });
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
        this.newCategoriaEvent.emit(JSON.stringify(this.categoriaForm.value));
        this.resetForm();
    });

  }

}
