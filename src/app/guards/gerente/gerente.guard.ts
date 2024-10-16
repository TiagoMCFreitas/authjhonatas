import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { AuthService } from '../../services/auth/auth.service';

export const gerenteGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAutenticado && (authService.isGerente() || authService.isAdmin())) {
    return true;
  } else {
    alert("Acesso negado! Somente Gerente ou Admin podem acessar esta página.");
    router.navigate(['/home']);
    return false;
  }
};
