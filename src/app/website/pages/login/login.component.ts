import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup
email:any = 'rchauirsiya383@gmail.com'
password:any = '123456789'
  constructor(private fb:FormBuilder,private router:Router,private toastr:ToastrService) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:[],
      password:[]
    })
  }
  onSubmit(){
    if(this.loginForm.valid){
      debugger
      const obj = this.loginForm.getRawValue()
      if(obj.email === this.email && obj.password === this.password){
        this.router.navigateByUrl('/dashboard')
      }else{
        this.toastr.error("Inavlid Email Id & password")
      }
    
    }else{
      
    }
  }
}
