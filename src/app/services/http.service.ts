import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'http://localhost:80/user';

  public tokenString: string; // API(token)? => desde PrivateComponent mostrarlo en pantalla
  token : BehaviorSubject<string>;

  constructor(private http:HttpClient) {
    this.token = new BehaviorSubject(this.tokenString);
  }

  login(email: string, password: string) {
    return this.http.post(this.baseUrl+'/login', {"email":email,"password":password});
  }

  setToken(token:string) {
    this.token.next(token);
  }

  getToken() {
    return this.tokenString;
  }
}
