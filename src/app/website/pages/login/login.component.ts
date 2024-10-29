import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';
import { UtilityService } from 'src/app/common/utility.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup
email:any = 'rchaurasiya383@gmail.com'
password:any = '123456789'
baseUrl = '/UserRegistration/login'
role:any
  constructor(private fb:FormBuilder,private router:Router,private toastr:ToastrService,private authService:AuthService, private utility : UtilityService
  ) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', Validators.required]
    });
  }
  onSubmit(){
    if(this.loginForm.valid){
      const obj = this.loginForm.getRawValue()
      this.authService.login(this.baseUrl,obj).subscribe(res=>{
        if(res){
          localStorage.setItem('token', res.token);
          this.authService.loginWithToken(res.token);
          this.utility.setTokenData();
          this.role = this.utility.getUsreNameRole()
          this.router.navigateByUrl('/dashboard')
          this.toastr.success('Welcome! janseva Foundation Dashboard');
        }
      })
    }else{
      this.toastr.error("Inavlid Email Id & password")
    }
  }
}
