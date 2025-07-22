// app.routes.ts
import { Routes } from '@angular/router';
import { Dashboard } from './main-content/dashboard/dashboard';
import { Inventory } from './main-content/inventory/inventory';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  {
    path: 'inventory',
    component: Inventory,
    children: [
      {
        path: ':category',
        loadComponent: () =>
          import('./main-content/inventory/stock-categories/stock-categories').then(m => m.StockCategories)
      },
      {
        path: ':category/edit/:stockId',
        loadComponent: () =>
          import('./main-content/inventory/stock-edit/stock-edit').then(m => m.StockEdit)
      }
    ]
  }
];

