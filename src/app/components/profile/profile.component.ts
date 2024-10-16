import { Component } from '@angular/core';
import { MenubarComponent } from "../menubar/menubar.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MenubarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
