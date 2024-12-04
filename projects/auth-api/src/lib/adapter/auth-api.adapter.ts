import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIAdapter implements Adapter {

  constructor() { }
  
  adapt(data:any){
    return {
      message: data.message,
      token:data.token,
      userEmail : data.user.email
    }
  }

  ForgPass(data:any){
    return {
      message: data.message,
      info: data.info
  }
  }

  verifyCode(data:any){
    return{
      status:data.status
    }
  }

  resetPass(data:any){
    return {
      message : data.message,
      token : data.token
    }
  }
}
