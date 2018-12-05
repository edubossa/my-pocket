import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Lancamento } from './lancamento';
import { CrudService } from '../infra/crud.service';
import { FormGroup } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LancamentoService extends CrudService<Lancamento> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'records');
   }

   save(item: any): Observable<Lancamento> {
      return this.httpClient.post<Lancamento>(this.API + this.endpoint + '/' + item.idCategoria + '/category' , item, httpOptions);
  }

}
