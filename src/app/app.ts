import { Component, signal } from '@angular/core';
import { Sidebar } from "./components/sidebar/sidebar";
import { MatIconModule } from '@angular/material/icon'
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar, MatIconModule, RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
