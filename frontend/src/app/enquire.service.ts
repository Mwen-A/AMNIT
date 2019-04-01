import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnquireService {
  // Url for address to post data
  _url = 'http://localhost:3000/enquire';
  constructor(private _http: HttpClient) {}

  // method for http request to post data
  enquire(user: User) {
    return this._http.post<any>(this._url, user);
  }
}
