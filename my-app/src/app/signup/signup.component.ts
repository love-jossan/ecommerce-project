import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoopingService } from '../shooping.service';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  constructor(private service:ShoopingService){}
  profileForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    rPassword: new FormControl({
      
    })
  });
  submit(){
    console.log('form value',this.profileForm.value)
    this.service.signup(this.profileForm.value).subscribe((res)=>{
      
      //  localStorage.setItem("user",JSON.stringify(this.profileForm.value))
    // console.log('users',res)
    })
  
  }
 
}
