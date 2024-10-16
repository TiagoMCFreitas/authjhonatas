import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [MenubarModule, CommonModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent {
  items: MenuItem[] | undefined;

  
  constructor(private authService: AuthService,private router: Router){}

    ngOnInit() {
          const authStatus = this.authService.getCargo();
          if (authStatus === 'admin') {
            this.items = [
              {
                label: 'Home',
                icon: 'pi pi-home',
                command: () => this.router.navigate(['/home'])
              },
              {
                label: 'Administrador',
                icon: 'pi pi-star',
                command: () => this.router.navigate(['/admin'])
              },
              {
                label: 'Gerente',
                icon: 'pi pi-star',
                command: () => this.router.navigate(['/gerente'])
              },
              {
                label: 'Profile',
                icon: 'pi pi-star',
                command: () => this.router.navigate(['/profile'])
              },
              {
                label: 'Exit',
                icon: 'pi pi-star',
                command: () => this.router.navigate(['/'])
              }
            ];  
          }
          if(authStatus === 'gerente'){
            this.items = [
              {
                label: 'Home',
                icon: 'pi pi-home',
                command: () => this.router.navigate(['/home'])
              },
              {
                label: 'Administrador',
                icon: 'pi pi-star',
                command: () => this.router.navigate(['/admin'])
              },
              {
                label: 'Profile',
                icon: 'pi pi-star',
                command: () => this.router.navigate(['/profile'])
              },
              {
               
                label: 'Exit',
                icon: 'pi pi-star',
                command: () => this.router.navigate(['/'])
               
              }
            ];
          }
          if(authStatus === 'user'){
            this.items = [
              {
                label: 'Home',
                icon: 'pi pi-home',
                command: () => this.router.navigate(['/home'])
              },
              {
                label: 'Profile',
                icon: 'pi pi-star',
                command: () => this.router.navigate(['/profile'])
              },
              {
                label: 'Exit',
                icon: 'pi pi-star',
                command: () => this.router.navigate(['/'])
              }
            ];
          }
        }


pegarCargo(){
  return this.authService.getCargo();
}

logout(){
this.authService.logout();
}
}
