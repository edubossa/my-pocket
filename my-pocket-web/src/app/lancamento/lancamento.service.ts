import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Lancamento } from './lancamento';
import { CrudService } from '../infra/crud.service';

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

   post(item: any): Observable<Lancamento> {
      console.log('SEND SAVE REQUEST ==> ' +  JSON.stringify(item));
      return this.httpClient.post<Lancamento>(this.API + this.endpoint + '/' + item.idCategoria + '/category' , item, httpOptions);
  }

}
