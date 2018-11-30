import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria } from './categoria';
import { Observable, of } from 'rxjs';
import { delay, tap, catchError } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly API = `${environment.API}categories`;

  constructor(private httpClient: HttpClient) { }

  findCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.API)
    .pipe(
      delay(500),
      tap(console.log)
    );
  }

  save(form: FormGroup): Observable<Categoria> {
    return this.httpClient.post<Categoria>(this.API, form.value, httpOptions)
    .pipe(
      tap(data => {
        console.log(JSON.stringify(data));
      })
    );
  }

  delete(id: number) {
    return this.httpClient.delete(this.API + '/' + id)
      .pipe(
        tap(console.log)
      );
  }

}
