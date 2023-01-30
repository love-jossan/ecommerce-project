import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoopingService } from '../shooping.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service: ShoopingService,
    private http: HttpClient,
    private router: Router) {

  }
  ngOnInit() {

  }
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  });
  login() {
    // console.log('loginform',this.loginForm.value)
    this.http.get<any>("http://localhost:3000/signup").subscribe((res) => {
      // console.log('=======h',res)
      const user = res.find((item: any) => {
        return item.email === this.loginForm.value.email && item.password === this.loginForm.value.password
      })
      if (user) {
        alert("Login Succssfull")
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      }
      else {
        alert("user not found")
      }
      // console.log('user',user)
    })
    // this.service.login().subscribe((res:any)=>{
    //   console.log('login user',res)
    // })
    //   let user  = JSON.parse(localStorage.getItem('user') || '{}');
    //  if(this.loginForm.value.email==user.email
    //    && this.loginForm.value.password==user.password){
    //  this.router.navigate(['dashboard'])
    //  }
    //  else{
    //   alert('Error')

    //  }
  }
}
