import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  // baseUrl = environment.strapiUrl
  constructor( private http:HttpClient) { }

//  getHomePageDetail(data):Observable<any>{
//   return this.http.get(this.baseUrl + data)
//  }
}
