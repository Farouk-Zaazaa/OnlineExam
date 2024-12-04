import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { ButtonComponent } from "../../../shared/components/UI/button/button.component";
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-set-passowrd',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent , InputTextModule],
  templateUrl: './set-passowrd.component.html',
  styleUrl: './set-passowrd.component.css'
})
export class SetPassowrdComponent {
  constructor(private _FormBuilder:FormBuilder , private _AuthApiService:AuthApiService , private _Router:Router){}

  setPassForm:FormGroup = this._FormBuilder.group({
    password:new FormControl(null , [Validators.required ]),
    rePass:new FormControl(null , [Validators.required ])
  })

  errorMsg : string = ""
  successMsg : string = ""


  setPass (){
    console.log(this._AuthApiService.currentEmail);

    console.log(this.setPassForm.value.rePass);
    
    let myObject : any = {
      email:this._AuthApiService.currentEmail,
      newPassword: this.setPassForm.value.rePass
  }

    
    this._AuthApiService.resetPass(myObject).subscribe({

      next:(res)=>{
        console.log(res);

        if(res && Array.isArray(res) && res[0] && res[0].error){
          this.successMsg = ""
          this.errorMsg   = res[0].error.message
        }
        if(res.message){
          this.errorMsg = ""
          this.successMsg   = res.message

          this._AuthApiService.currentEmail = ""

          // this._Router.navigate(['auth/setPass'])
        }
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    }
      
    )

    
  }

}
