import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria } from './categoria';
import { CrudService } from '../infra/crud.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends CrudService<Categoria> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'categories');
  }

}
