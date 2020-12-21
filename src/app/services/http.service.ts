import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // get apps by search key
  public getApss(appname: string = ""){
    return this.http.get('../assets/data/apss.json')
  }
}
