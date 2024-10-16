import { Component, OnInit } from '@angular/core';
import {FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { CommonModule, NgStyle } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { Cargos } from '../../types/cargos.types';
import { DropdownModule } from 'primeng/dropdown';
import { RegisterService } from '../../services/register/register.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ToastModule, DropdownModule, FormsModule, CommonModule, RouterModule, FloatLabelModule, FormsModule, ButtonModule, NgStyle, InputTextModule,  PasswordModule, RouterModule, AvatarModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [MessageService]
})
export class RegisterComponent implements OnInit{
  email: string | undefined;
  password: string | undefined;
  cargos: Cargos[] | undefined;
  selectedCargo: Cargos | undefined;

  constructor(private registerService: RegisterService,
    private messageService: MessageService,
  ) {}

  ngOnInit() {
    this.cargos = [
      { cargo: 'Usuario', value: 'user' },
      { cargo: 'Gerente', value: 'gerente' },
      { cargo: 'Administrador', value: 'admin' },
    ];
  }

  cadastrar() {
    if (this.email && this.password && this.selectedCargo) {

      this.registerService.registerUser(this.email, this.password, this.selectedCargo.value);

      this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Usuario cadastrado com sucesso!' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Erro!', detail: 'Preencha todos os campos!' });
    }
  }
}
