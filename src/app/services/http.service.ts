import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // get apps by search key
  public getApss(appname: string = ""){
    return this.http.get('')
  }

  // get prediction rate
  public getRate(appsname: string = "", appdescription: string = ""){
    return this.http.get('../assets/data/rate.json')
  }
}
