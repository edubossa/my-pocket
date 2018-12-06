import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lancamento } from './lancamento';
import { CrudService } from '../infra/crud.service';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService extends CrudService<Lancamento> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'records');
   }

}
