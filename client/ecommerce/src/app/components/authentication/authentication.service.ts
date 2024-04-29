import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { API_URLS } from '../../shared/constants/api-defines';

@Injectable()
export class AuthenticationService {
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
}