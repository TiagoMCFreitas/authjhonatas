import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isAutenticado: boolean = this.getAuthStatus();
  cargo: string = this.getCargo();

  constructor(private router: Router,
    private messageService: MessageService
  ) {}

  login(username: string, password: string): boolean {
    if (username && password) {

      const userData = localStorage.getItem(username);

      if (userData) {
        const user = JSON.parse(userData);

        if (user.password === password) {
          if (user.cargo === 'admin') {
            this.setAuthState(true, 'admin');
            this.router.navigate(['/home']);
            return true;
          } else if (user.cargo === 'gerente') {
            this.setAuthState(true, 'gerente');
            this.router.navigate(['/home']);
            return true;
          } else if (user.cargo === 'user') {
            this.setAuthState(true, 'user');
            this.router.navigate(['/home']);
            return true;
          }
        } else {
          this.messageService.add({ severity: 'error', summary: 'Erro!', detail: 'Senha incorreta!' });
        }
      } else {
        this.messageService.add({ severity: 'error', summary: 'Erro!', detail: 'Usuário não encontrado!' });
      }
    }

    return false;
  }


  logout(): void {
    this.setAuthState(false, '');
    this.router.navigate(['/login']);
  }

  private setAuthState(authStatus: boolean, cargo: string): void {
    this.isAutenticado = authStatus;
    this.cargo = cargo;
    localStorage.setItem('authStatus', JSON.stringify(authStatus));
    localStorage.setItem('cargo', cargo);
  }

  private getAuthStatus(): boolean {
    return JSON.parse(localStorage.getItem('authStatus') || 'false');
  }

   getCargo(): string {
    return localStorage.getItem('cargo') || '';
  }

  isAdmin(): boolean {
    return this.cargo === 'admin';
  }

  isGerente(): boolean {
    return this.cargo === 'gerente';
  }

  isUser(): boolean {
    return this.cargo === 'user';
  }
}
