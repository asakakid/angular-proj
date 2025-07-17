// app.routes.ts
import { Routes } from '@angular/router';
import { Dashboard } from './main-content/dashboard/dashboard';
import { Inventory } from './main-content/inventory/inventory';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'inventory', component: Inventory }

];
