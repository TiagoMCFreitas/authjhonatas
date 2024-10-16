import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { userGuard } from './guards/auth/user.guard';
import { adminGuard } from './guards/admin/admin.guard';
import { gerenteGuard } from './guards/gerente/gerente.guard';
import { GerenteComponent } from './components/gerente/gerente.component';
import { AdmComponent } from './components/adm/adm.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [userGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [userGuard] },
  { path: 'admin', component: AdmComponent, canActivate: [adminGuard] },
  { path: 'gerente', component: GerenteComponent, canActivate: [gerenteGuard] },
  { path: '**', redirectTo: 'login' }
];
