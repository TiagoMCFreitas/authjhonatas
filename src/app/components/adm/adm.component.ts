import { Component } from '@angular/core';
import { MenubarComponent } from "../menubar/menubar.component";

@Component({
  selector: 'app-adm',
  standalone: true,
  imports: [MenubarComponent],
  templateUrl: './adm.component.html',
  styleUrl: './adm.component.scss'
})
export class AdmComponent {

}
