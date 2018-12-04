import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Cadastro } from './cadastro';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly API = `${environment.API}records`;

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Cadastro[]> {
    return this.httpClient.get<any>(this.API);
  }

  delete(id: any): Observable<any> {
    return this.httpClient.delete(this.API + '/' + id);
  }

}
