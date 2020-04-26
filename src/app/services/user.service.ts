import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from '../models/response/userDetails.model';

const USER_API = 'http://localhost:8080/api/v1/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserDetails(userId): Observable<UserDetails> {
    return this.http.get<UserDetails>(USER_API + userId);
  }

  autocomplete(adress: string) {
    const url = `https://ms-store-franprix-sandbox.hp-mcommerce.franprix.fr/public/api/franprix/v1/geocomplete?input=`;
    return this.http.get(url + adress);
  }

}
