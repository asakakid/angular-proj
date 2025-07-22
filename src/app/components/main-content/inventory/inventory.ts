import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inventory',
  imports: [RouterModule, CommonModule],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css'
})
export class Inventory {
    stock: number= 42; // can change the value anytime for the stocks

    categories = [
    { name: 'Game Credits', route: 'game-credits' },
    { name: 'Premium Products', route: 'premium-products' },
    { name: 'Android Games', route: 'android-games' },
    { name: 'iOS Games', route: 'ios-games' },
  ];
  constructor(public route: ActivatedRoute) {}
}
