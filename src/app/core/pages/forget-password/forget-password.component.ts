import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { ButtonComponent } from "../../../shared/components/UI/button/button.component";
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent , InputTextModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {

  constructor(private _FormBuilder:FormBuilder , private _AuthApiService:AuthApiService , private _Router:Router){}

  ForgetForm:FormGroup = this._FormBuilder.group({
    email:new FormControl(null , [Validators.required ])
  })

  errorMsg : string = ""
  successMsg : string = ""
  currentEmail: string = ""

  ForgetPass (){

    console.log(this.ForgetForm.value.email);
    
    
    this._AuthApiService.forgetPassword(this.ForgetForm.value).subscribe({

      next:(res)=>{
        

        if(res && Array.isArray(res) && res[0] && res[0].error){
          this.successMsg = ""
          this.errorMsg   = res[0].error.message 
        }
        if(res.message){
          this.errorMsg = ""
          this.successMsg   = res.message + " " + res.info

          this._Router.navigate(['auth/verifyCode'])

          this._AuthApiService.currentEmail = this.ForgetForm.value.email

          console.log(this._AuthApiService.currentEmail);
          
        }
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    }
      
    )
  }

}
