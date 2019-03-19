import { Injectable } from "@angular/core";
import { TokenService } from "../token/token.service";
import { BehaviorSubject } from "rxjs";
import { User } from "./user";
import * as jtw_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private userSubject = new BehaviorSubject<User>(null);

  constructor( private tokenService: TokenService ) {

    this.tokenService.hasToken() &&
      this.decodeAndNotify();
  }

  setToken(token: string){
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser(){
    return this.userSubject.asObservable();
  }

  private decodeAndNotify(){
    const token = this.tokenService.getToken();
    const user = jtw_decode(token) as User;
    this.userSubject.next(user);
  }
}