import { Component, signal } from '@angular/core';
import { Sidebar } from "./sidebar/sidebar";
import { MatIconModule } from '@angular/material/icon'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar, MatIconModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
