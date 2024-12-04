import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { ButtonComponent } from "../../../shared/components/UI/button/button.component";
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent , PasswordModule , FormsModule , InputTextModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private _FormBuilder:FormBuilder , private _AuthApiService:AuthApiService , private _Router : Router){}

  registerForm:FormGroup = this._FormBuilder.group({
    username:new FormControl(null , [Validators.required , Validators.pattern(/^[a-zA-Z]{4,25}$/) ]),
    firstName:new FormControl(null , [Validators.required , Validators.pattern(/^[a-zA-Z]+$/)] ),
    lastName:new FormControl(null , [Validators.required , Validators.pattern(/^[a-zA-Z]+$/)]  ),
    email:new FormControl(null , [Validators.required ,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    password:new FormControl(null , [ Validators.required , Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/) ] ),
    rePassword:new FormControl(null , [ Validators.required , Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/) ] ),
    phone:new FormControl(null , Validators.required )
  })

  errorMsg : string = ""
  successMsg : string = ""

  register (){
    
    this._AuthApiService.register(this.registerForm.value).subscribe({

      next:(res)=>{
        console.log(res);

        if(res && Array.isArray(res) && res[0] && res[0].error){
          this.successMsg = ""
          this.errorMsg   = res[0].error.message
        }
        if(res.message){
          this.errorMsg = ""
          this.successMsg   = res.message

          this._Router.navigate(['auth/login'])
        }
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    }
      
    )
  }

}
