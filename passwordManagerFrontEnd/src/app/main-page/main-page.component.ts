import { Component } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ItemCardComponent,NgFor],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  cards = [
    { title: 'Card 1', content: 'This is card 1' },
    { title: 'Card 2', content: 'This is card 2' },
    { title: 'Card 3', content: 'This is card 3' }
  ]
}
