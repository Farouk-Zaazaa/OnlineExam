import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthEndPoint } from './enums/AuthAPI.endpoint';
import { AuthApi } from './base/AuthAPI';
import { AuthAPIAdapter } from './adapter/auth-api.adapter';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AuthApi {

  constructor(private _HttpClient:HttpClient , private _AuthAPIAdapter:AuthAPIAdapter ) { }

  login(data:any):Observable <any> {
    return this._HttpClient.post(  AuthEndPoint.Login ,  data).pipe(
      map(res=>this._AuthAPIAdapter.adapt(res)),
      catchError(err=>of([err]))
    )
  }
  register(data:any):Observable <any> {
    return this._HttpClient.post(  AuthEndPoint.Register ,  data).pipe(
      map(res=>this._AuthAPIAdapter.adapt(res)),
      catchError(err=>of([err]))
    )
  }
  forgetPassword(data:any):Observable <any> {
    return this._HttpClient.post(  AuthEndPoint.ForgetPassword ,  data).pipe(
      map(res=> this._AuthAPIAdapter.ForgPass(res)),
      catchError(err=>of([err]))
    )
  }
  verifyCode(data:any):Observable <any> {
    return this._HttpClient.post(  AuthEndPoint.verifyCode ,  data).pipe(
      map(res=>this._AuthAPIAdapter.verifyCode(res)),
      catchError(err=>of([err]))
    )
  }
  resetPass(data:any):Observable <any> {
    return this._HttpClient.put(  AuthEndPoint.resetPass ,  data).pipe(
      map(res=>this._AuthAPIAdapter.resetPass(res)),
      catchError(err=>of([err]))
    )
  }



  currentEmail: string = ""

}
