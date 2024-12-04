import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { ButtonComponent } from "../../../shared/components/UI/button/button.component";
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent , InputTextModule],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.css'
})
export class VerifyCodeComponent {

  constructor(private _FormBuilder:FormBuilder , private _AuthApiService:AuthApiService , private _Router:Router){}

  verifyForm:FormGroup = this._FormBuilder.group({
    resetCode:new FormControl(null , [Validators.required ])
  })

  errorMsg : string = ""
  successMsg : string = ""

  verifyCode (){
    console.log(this.verifyForm.value);
    
    this._AuthApiService.verifyCode(this.verifyForm.value).subscribe({

      next:(res)=>{
        console.log(res);

        if(res && Array.isArray(res) && res[0] && res[0].error){
          this.successMsg = ""
          this.errorMsg   = res[0].error.message
        }
        if(res.status){
          this.errorMsg = ""
          this.successMsg   = res.status

          this._Router.navigate(['auth/setPass'])
        }
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    }
      
    )

    
  }

}
