import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private readonly http: HttpClient
  ) { }

  // Get users list
  public getItemsList(page): Observable<any> {
    return this.http.get(`https://reqres.in/api/users?page=${page + 1}`)
  }

  // Get user
  public getUser(id: string): Observable<any> {
    return this.http.get(`https://reqres.in/api/users/${id}`)
  }
}
