import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProddetailsService {
 private baseUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }



  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }



  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
