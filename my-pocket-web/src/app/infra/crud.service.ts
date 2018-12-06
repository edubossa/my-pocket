import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable, of } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

export abstract class CrudService<T> {

    protected readonly API = `${environment.API}`;

    constructor(protected httpClient: HttpClient, protected endpoint: string) { }

    getAll(): Observable<T[]> {
        console.log('SEND GET REQUEST ==> ' +  this.API + this.endpoint);
        return this.httpClient.get<T[]>(this.API  + this.endpoint, httpOptions);
    }

    getById(id: any): Observable<T> {
        console.log('SEND GET REQUEST ==> ' +  this.API + this.endpoint + '/' + id);
        return this.httpClient.get<T>(this.API  + this.endpoint + '/' + id, httpOptions);
    }

    post(item: T): Observable<T> {
        console.log('SEND POST REQUEST ==> ' +  JSON.stringify(item));
        return this.httpClient.post<T>(this.API + this.endpoint, item, httpOptions);
    }

    put(item: T, id: any): Observable<T> {
        console.log('SEND PUT REQUEST ==> ' +  JSON.stringify(item));
        return this.httpClient.put<T>(this.API + this.endpoint + '/' + id, item, httpOptions);
    }

    delete(id: any): Observable<T> {
        console.log('SEND DELETE REQUEST ==> ' +  this.API + this.endpoint + '/' + id);
        return this.httpClient.delete<T>(this.API + this.endpoint + '/' + id, httpOptions);
    }

}
