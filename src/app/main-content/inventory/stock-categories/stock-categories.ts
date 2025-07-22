import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-categories',
  imports: [CommonModule],
  template: `
    <h2>{{ categoryName | titlecase }} Stocks</h2>
    <p>Here you'd fetch/display stocks for this category.</p>
  `
})
export class StockCategories {
  categoryName: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('category') ?? '';
    });
  }
}
