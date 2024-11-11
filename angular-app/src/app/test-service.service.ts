import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  id!: String;
  
  constructor(
    private http: HttpClient,
  ) { }

  getStuff(): Observable<any> {
    return this.http.get<any>(`/api/general`)
  }

  getMoreStuff(id: String): Observable<any> {
    // return this.http.get<any>(`/api/specific`) // works
    return this.http.get<any>(`/api/general/${id}`) //doesn't work
  }
}
