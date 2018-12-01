import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-delete-categoria',
  template: `
  <button class="btn btn-outline-danger btn-sm ml-3" (click)="delete()" ><i class="fas fa-trash-alt"></i></button>
  `
})
export class DeleteCategoriaComponent implements OnInit {

  @Input() id: number;

  @Output() deleteCategoriaEvent = new EventEmitter();

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
  }

  delete() {

    if (!confirm('Confirma a remoção da categoria - ' + this.id)) {
      return;
    }

    this.categoriaService.delete(this.id).pipe(
      take(1)
    )
    .subscribe(data => {
      console.log(data);
    }, (error: any) => {
      alert(JSON.stringify(error));
    }, () => {
      console.log('FINALIZANDO DELETE CATEGORIA - ' +  this.id);
      this.deleteCategoriaEvent.emit('FINALIZANDO DELETE CATEGORIA - ' +  this.id);
    });

  }

}
