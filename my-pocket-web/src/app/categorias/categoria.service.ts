import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria } from './categoria';
import { Observable } from 'rxjs';
import { delay, tap, catchError } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  private readonly API = 'http://localhost:8080/categories';

  constructor(private httpClient: HttpClient) { }

  findCategorias() {
    return this.httpClient.get<Categoria[]>(this.API)
    .pipe(
      delay(500),
      tap(console.log)
    );
  }

  save(form: FormGroup): Observable<Categoria> {
    return this.httpClient.post(this.API, form.value, httpOptions)
    .pipe(
      tap(console.log),
      //catchError(console.log(''))
    );
  }

}
