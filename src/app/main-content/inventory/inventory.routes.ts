// inventory.routes.ts
import { Routes } from '@angular/router';
import { StockCategories } from './stock-categories/stock-categories';
import { StockEdit } from './stock-edit/stock-edit';

export const inventoryRoutes: Routes = [
  {
    path: ':category',
    component: StockCategories, // Shows list of stocks for clicked category
  },
  {
    path: ':category/edit/:stockId',
    component: StockEdit, // Form to edit a specific stock
  }
];
