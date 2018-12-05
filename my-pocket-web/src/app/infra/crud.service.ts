import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable, of } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

export abstract class CrudService<T> {

    protected readonly API = `${environment.API}`;

    constructor(protected httpClient: HttpClient, protected endpoint: string) { }

    findAll(): Observable<T[]> {
        return this.httpClient.get<T[]>(this.API  + this.endpoint, httpOptions);
    }

    save(item: T): Observable<T> {
        return this.httpClient.post<T>(this.API + this.endpoint, item, httpOptions);
    }

    update(item: T, id: any): Observable<T> {
        return this.httpClient.put<T>(this.API + this.endpoint + '/' + id, item, httpOptions);
    }

    delete(id: any): Observable<T> {
        return this.httpClient.delete<T>(this.API + this.endpoint + '/' + id, httpOptions);
    }





}
