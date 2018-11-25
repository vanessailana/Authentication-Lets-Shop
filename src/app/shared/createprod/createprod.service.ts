import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateprodService {
private baseUrl = 'http://localhost:8080/api/createProduct';

constructor(private http: HttpClient) { }

 createProduct(createprod: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`,createprod);
  }

  }
