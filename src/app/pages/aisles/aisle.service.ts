import { Injectable } from '@angular/core';
import { Aisle } from './aisle.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class AisleService {
private aisle = new Aisle();
private baseUrl = 'http://localhost:8080/api/aisles';

  constructor(private http: HttpClient) {
  }

 getAll(): Observable<any> {
    return this.http.get<Aisle[]>(this.baseUrl).catch(this.errorHandler);
  }

  }
