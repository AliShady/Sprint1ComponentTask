import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StoreService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get("http://localhost:3000/api/product/getProducts");
  }

}
