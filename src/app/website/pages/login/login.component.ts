import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';
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
  constructor(private fb:FormBuilder,private router:Router,private toastr:ToastrService,private authLogin:AuthService) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:[],
      password:[]
    })
  }
  onSubmit(){
    if(this.loginForm.valid){
      const obj = this.loginForm.getRawValue()
      this.authLogin.login(this.baseUrl,obj).subscribe(res=>{
        if(res){
          this.router.navigateByUrl('/dashboard')
          this.toastr.success('Welcome! janseva Foundation Dashboard');
        }
      })
    }else{
      this.toastr.error("Inavlid Email Id & password")
    }
  }
}
