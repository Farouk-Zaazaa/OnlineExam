import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { log } from 'console';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonComponent } from "../../../shared/components/UI/button/button.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, FormsModule, PasswordModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  constructor(private _FormBuilder:FormBuilder , private _AuthApiService:AuthApiService , private _Router:Router){}

  signInForm:FormGroup = this._FormBuilder.group({
    email:new FormControl(null ,[Validators.required ,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    password:new FormControl(null ,[ Validators.required , Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/) ] )
  })

  errorMsg :string = ""
  successMsg :string = ""




  signIn (){
    
    this._AuthApiService.login(this.signInForm.value).subscribe({
      next:(res)=>{
        console.log(res);

        
        if(res && Array.isArray(res) && res[0] && res[0].error){
          this.successMsg = ""
          this.errorMsg   = res[0].error.message
        }
        
        if(res.message){
          this.errorMsg = ""
          this.successMsg   = res.message

          this._Router.navigate(['home'])
        }
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    }
    )
  }


}
