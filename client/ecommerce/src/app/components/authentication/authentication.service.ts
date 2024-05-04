import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { API_URLS } from '../../shared/constants/api-defines';

@Injectable()
export class AuthenticationService {
  /** emailSubmitted- to listen to submiting email in auth component and pass it to login/register components */
  public emailSubmitted = new EventEmitter<string>();

  /** transaction */
  public transaction: string = '';
  constructor(private http: HttpClient) { }

  /** findEmail */
  public findEmail(email: string){
    const url = API_URLS.FIND_EMAIL;
    const payload = {
        email,
    }
    return this.http.post(url, payload).pipe(map((respone: any) => {
        return respone;
    }))
    .pipe(catchError((error: any) => {
        throw error;
    }))
  }

  /** submitRegister */
  public submitRegister(email: string, password: string, confirmPassword: string, fullName: string){
    const url = API_URLS.REGISTER
    const payload = {
      email,
      password,
      confirmPassword,
      fullName
    }

    return this.http.post(url, payload).pipe(map((response) => {
      return response;
    }))
    .pipe(catchError((error) => {
      throw error;
    }))

  }

  /** submitLogin */
  public submitLogin(email: string, password: string){
    const url = API_URLS.SIGN_IN;
    const payload = {
      email,
      password
    }

    return this.http.post(url, payload).pipe(map((response => {
      return response;
    }))).pipe(catchError((error) => {
      throw error;
    }))
  }

  /** signOut */
  public signOut(){
    const url = API_URLS.SIGN_OUT;

    return this.http.get(url).pipe(map((response) => {
      return response;
    })).pipe(catchError((error) => {
      throw error;
    }))
  }
}