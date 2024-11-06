import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  
  constructor(
    private http: HttpClient,
  ) { }

  getStuff(): Observable<any> {
    return this.http.get<any>(`/api/general`)
  }

  getMoreStuff(): Observable<any> {
    return this.http.get<any>(`/api/general/specific`)
  }
}
