import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    
    public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
    
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            if (localStorage.getItem('token')) {
                //console.log('token serv', );
                this.loggedIn.next(true);
            }
        }
    }

}