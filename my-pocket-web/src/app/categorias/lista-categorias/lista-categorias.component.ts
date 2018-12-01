import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html'
})
export class ListaCategoriasComponent implements OnInit {

  categorias$: Observable<Categoria[]>;

  constructor(protected categoriaService: CategoriaService) {}

  ngOnInit() {
    this.loadCategoria();
  }

  loadCategoria() {
    this.categorias$ = this.categoriaService.findCategorias();
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

}
