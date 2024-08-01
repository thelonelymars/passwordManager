import { Component } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { NgFor } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ItemCardComponent,NgFor,MatButtonModule,MatIconModule,MatMenuModule],
  animations: [
    trigger('toggleSection', [
      state('hidden', style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('hidden <=> visible', [
        animate('0.3s ease-in-out')
      ])
    ])
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  cards = [
    { title: 'Card 1', content: 'This is card 1' },
    { title: 'Card 2', content: 'This is card 2' },
    { title: 'Card 3', content: 'This is card 3' },
    { title: 'Card 1', content: 'This is card 1' },
    { title: 'Card 2', content: 'This is card 2' },
    { title: 'Card 3', content: 'This is card 3' },
    { title: 'Card 1', content: 'This is card 1' },
    { title: 'Card 2', content: 'This is card 2' },
    { title: 'Card 3', content: 'This is card 3' },
    { title: 'Card 1', content: 'This is card 1' },
    { title: 'Card 2', content: 'This is card 2' },
    { title: 'Card 3', content: 'This is card 3' }
  ]
  isSectionVisible = false;
  AddItem() {
    // Toggle the visibility of the section
    this.isSectionVisible = !this.isSectionVisible;
  }
  CloseSection() {
    this.isSectionVisible = false;
  }
}
