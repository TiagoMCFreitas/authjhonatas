import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  registerUser(email: string, password: string, cargo: string): void {
    const user = {
      email,
      password,
      cargo
    };

    localStorage.setItem(email, JSON.stringify(user));
  }
}
