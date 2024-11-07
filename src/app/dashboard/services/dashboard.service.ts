import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  apiUrl = environment.config.apiUrl
  constructor( private http:HttpClient) { }

 addBoardMember(baseUrl,data):Observable<any>{
  return this.http.post(this.apiUrl + baseUrl, data)
 }
 addTeamMember(baseUrl,data):Observable<any>{
  return this.http.post(this.apiUrl + baseUrl, data)
 }
 addDoner(baseUrl,data):Observable<any>{
  return this.http.post(this.apiUrl + baseUrl, data)
 }
 addVolounteer(baseUrl,data):Observable<any>{
  return this.http.post(this.apiUrl + baseUrl, data)
 }
}
