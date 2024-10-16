import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenubarComponent } from "../menubar/menubar.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MenubarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit{


  ngOnInit(): void {

  }
}
