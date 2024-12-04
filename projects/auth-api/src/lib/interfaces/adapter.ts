export interface Adapter {

    adapt(data:any):any

    ForgPass(data:any):any

    verifyCode(data:any):any

    resetPass(data:any):any
}
