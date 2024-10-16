import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { AuthService } from '../../services/auth/auth.service';

// Guard para Admin
export const adminGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAutenticado && authService.isAdmin()) {
    return true;
  } else {
    alert("Acesso negado! Somente Admin pode acessar esta página.");
    router.navigate(['/home']);
    return false;
  }
};
