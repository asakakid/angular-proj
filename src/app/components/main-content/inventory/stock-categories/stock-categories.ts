import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ for [(ngModel)]

type Stock = {
  no: number;
  name: string;
  price: number;
  quantity: number;
  availability: boolean;
};

@Component({
  selector: 'app-stock-categories',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ import FormsModule here
  templateUrl: './stock-categories.html',
  styleUrls: ['./stock-categories.css']
})
export class StockCategories {
  categoryName: string = '';
  stocks: Stock[] = [];

  isEditModalOpen: boolean = false;
  selectedStock: Stock = { no: 0, name: '', price: 0, quantity: 0, availability: false };

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('category') ?? '';
      this.loadStocksForCategory();
    });
  }

  loadStocksForCategory() {
    const allStocks: Record<string, Stock[]> = {
      'game-credits': [
        { no: 1, name: 'Garena Shells', price: 175, quantity: 100, availability: true },
        { no: 2, name: 'LOL Riot Points', price: 175, quantity: 50, availability: true },
        { no: 3, name: 'MLBB DIAS PH', price: 175, quantity: 50, availability: false },
        { no: 4, name: 'Valorant', price: 175, quantity: 50, availability: true }
      ]
    };

    this.stocks = allStocks[this.categoryName] || [];
  }

  editStock(stock: Stock) {
    this.selectedStock = { ...stock }; // copy the object
    this.isEditModalOpen = true;
  }

  saveEdit() {
    const index = this.stocks.findIndex(s => s.no === this.selectedStock.no);
    if (index !== -1) {
      this.stocks[index] = { ...this.selectedStock };
    }
    this.isEditModalOpen = false;
  }

  cancelEdit() {
    this.isEditModalOpen = false;
  }
}
