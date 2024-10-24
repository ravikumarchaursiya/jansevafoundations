import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {
  apiUrl = environment.config.apiUrl
  constructor( private http:HttpClient) { }

 userRegisteration(baseUrl,data):Observable<any>{
  return this.http.post(this.apiUrl + baseUrl, data)
 }
}


