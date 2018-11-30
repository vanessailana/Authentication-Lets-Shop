import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response,RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Home} from './home.model';
@Injectable({
  providedIn: 'root'
})

export class HomeService {
  private homes = new Home();
  private baseUrl = 'http://localhost:8080/portal/home';


  constructor(private http: HttpClient) {
  }

 getAll(): Observable<any> {
    return this.http.get<Home[]>(this.baseUrl).catch(this.errorHandler);
  }







 setter(homes:Home){
     this.homes=homes;
   }

  getter(){
    return this.homes;
  }
   errorHandler(error:Response){

     return Observable.throw(error||"SERVER ERROR");
  }
}
