import { Component } from '@angular/core';
import { MenubarComponent } from "../menubar/menubar.component";

@Component({
  selector: 'app-gerente',
  standalone: true,
  imports: [MenubarComponent],
  templateUrl: './gerente.component.html',
  styleUrl: './gerente.component.scss'
})
export class GerenteComponent {

}
