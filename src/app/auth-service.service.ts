import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(username: string, password: string) {
    console.log('login Service', username, password)
  }
}
