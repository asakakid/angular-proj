import { Component } from '@angular/core';

// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatFormFieldModule } from '@angular/material/form-field'; 
// import { MatInputModule } from '@angular/material/input'; 
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router'; 


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})


export class Sidebar {
}
