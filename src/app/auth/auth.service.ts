import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.config.apiUrl;
 
  private tokenCheckSubscription: Subscription | null = null;

  constructor(private http: HttpClient, private router: Router) {
    this.initializeTokenCheck();
  }

  login(baseUrl,data): Observable<any> {
    return this.http.post(this.apiUrl + baseUrl, data);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  loginWithToken(token: string) {
    const expirationTime = new Date().getTime() + 3600 * 1000; // 1 hour from now
    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpiration', expirationTime.toString());
    this.initializeTokenCheck();
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
    if (this.tokenCheckSubscription) {
      this.tokenCheckSubscription.unsubscribe();
      this.tokenCheckSubscription = null;
    }
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private initializeTokenCheck() {
    if (!this.tokenCheckSubscription) {
      this.tokenCheckSubscription = interval(60000).subscribe(() => {
        this.checkTokenExpiration();
      });
    }
  }

  public checkTokenExpiration() {
    const expiration = localStorage.getItem('tokenExpiration');
    if (expiration) {
      const expirationTime = parseInt(expiration, 10);
      const currentTime = new Date().getTime();
      if (currentTime > expirationTime) {
        this.logout();
      }
    }
  }
}